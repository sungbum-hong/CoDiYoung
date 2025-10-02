import { useState, useRef } from 'react';
import Button from '../../../ui/Button';
import { ImageService } from '../../../services/imageService.js';

export default function StorageApiTest({ onResult }) {
  const [testInputs, setTestInputs] = useState({
    filename: 'test.jpg',
    contentType: 'image/jpeg',
    key: 'test/image.jpg',
    originalFilename: 'test-image.jpg'
  });

  const [loading, setLoading] = useState({});
  const [individualResults, setIndividualResults] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const executeTest = async (testName, apiCall, method, endpoint) => {
    setLoading(prev => ({ ...prev, [testName]: true }));
    
    try {
      const startTime = Date.now();
      const result = await apiCall();
      const endTime = Date.now();
      
      const resultData = {
        testName,
        method,
        endpoint,
        success: true,
        status: '200 OK',
        data: result,
        responseTime: `${endTime - startTime}ms`,
        timestamp: new Date().toLocaleString()
      };
      
      // 전역 결과에 추가
      onResult(resultData);
      
      // 개별 결과에도 저장
      setIndividualResults(prev => ({
        ...prev,
        [testName]: resultData
      }));
    } catch (error) {
      const errorResult = {
        testName,
        method,
        endpoint,
        success: false,
        status: error.message.includes('(') ? error.message.match(/\((\d+)\)/)?.[1] : 'Error',
        error: error.message,
        timestamp: new Date().toLocaleString()
      };
      
      // 전역 결과에 추가
      onResult(errorResult);
      
      // 개별 결과에도 저장
      setIndividualResults(prev => ({
        ...prev,
        [testName]: errorResult
      }));
    } finally {
      setLoading(prev => ({ ...prev, [testName]: false }));
    }
  };

  // 파일 선택 핸들러
  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 변경 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // 선택된 파일에 맞게 입력값 업데이트
      setTestInputs(prev => ({
        ...prev,
        filename: file.name,
        contentType: file.type,
        originalFilename: file.name
      }));
    }
  };

  // ImageService를 사용한 실제 파일 업로드 테스트
  const executeActualUpload = () => {
    if (!selectedFile) {
      alert('먼저 파일을 선택해주세요.');
      return;
    }

    return executeTest(
      'actualUpload',
      async () => {
        const key = await ImageService.uploadImage(selectedFile);
        // 업로드 성공 시 key 업데이트
        setTestInputs(prev => ({ ...prev, key: key }));
        return { imageKey: key, service: 'ImageService' };
      },
      'ImageService.uploadImage',
      '통합 이미지 업로드'
    );
  };

  const tests = [
    {
      name: 'presignPut',
      label: '이미지 업로드 presign URL 발급',
      method: 'ImageService.getPresignedUploadUrl',
      endpoint: 'Presigned URL 발급',
      action: () => executeTest(
        'presignPut',
        () => ImageService.getPresignedUploadUrl(testInputs.filename, testInputs.contentType),
        'ImageService.getPresignedUploadUrl',
        'Presigned Upload URL 발급'
      )
    },
    {
      name: 'actualUpload',
      label: '실제 파일 업로드 (전체 플로우)',
      method: 'ImageService.uploadImage',
      endpoint: '통합 이미지 업로드',
      action: executeActualUpload
    },
    {
      name: 'presignGet',
      label: '이미지 조회 presign URL 발급',
      method: 'ImageService.getImageUrl',
      endpoint: 'Presigned Get URL 발급',
      action: () => executeTest(
        'presignGet',
        () => ImageService.getImageUrl(testInputs.key),
        'ImageService.getImageUrl',
        'Presigned Get URL 발급'
      )
    }
  ];

  const runAllTests = async () => {
    for (const test of tests) {
      await test.action();
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  // API별 개별 입력 폼 렌더링
  const renderApiInputs = (test) => {
    switch(test.name) {
      case 'presignPut':
      case 'actualUpload':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">파일명</label>
              <input
                type="text"
                value={testInputs.filename}
                onChange={(e) => setTestInputs(prev => ({ ...prev, filename: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="test.jpg"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">컨텐츠 타입</label>
              <input
                type="text"
                value={testInputs.contentType}
                onChange={(e) => setTestInputs(prev => ({ ...prev, contentType: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="image/jpeg"
              />
            </div>
          </div>
        );
        
      case 'presignGet':
        return (
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">이미지 키</label>
            <input
              type="text"
              value={testInputs.key}
              onChange={(e) => setTestInputs(prev => ({ ...prev, key: e.target.value }))}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              placeholder="test/image.jpg"
            />
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* 파일 선택 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* 파일 선택 및 정보 */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-medium text-gray-900 mb-3">📁 실제 파일 업로드</h4>
        <div className="flex items-center gap-4 mb-3">
          <Button
            onClick={handleFileSelect}
            variant="secondary"
            className="text-sm"
          >
            이미지 파일 선택
          </Button>
          {selectedFile && (
            <div className="text-sm text-gray-600">
              선택된 파일: <span className="font-medium">{selectedFile.name}</span> 
              ({(selectedFile.size / 1024).toFixed(1)}KB, {selectedFile.type})
            </div>
          )}
        </div>
        {selectedFile && (
          <div className="text-xs text-gray-500">
            ✅ 파일이 선택되었습니다. 아래 "실제 파일 업로드" 테스트를 실행하세요.
          </div>
        )}
      </div>

      {/* 테스트 입력값 설정 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-3">테스트 입력값 설정</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              파일명
            </label>
            <input
              type="text"
              value={testInputs.filename}
              onChange={(e) => setTestInputs(prev => ({ ...prev, filename: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="test.jpg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              원본 파일명
            </label>
            <input
              type="text"
              value={testInputs.originalFilename}
              onChange={(e) => setTestInputs(prev => ({ ...prev, originalFilename: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="test-image.jpg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              컨텐츠 타입
            </label>
            <input
              type="text"
              value={testInputs.contentType}
              onChange={(e) => setTestInputs(prev => ({ ...prev, contentType: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="image/jpeg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              이미지 키
            </label>
            <input
              type="text"
              value={testInputs.key}
              onChange={(e) => setTestInputs(prev => ({ ...prev, key: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="test/image.jpg"
            />
          </div>
        </div>
      </div>

      {/* 전체 테스트 실행 버튼 */}
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">스토리지 API 테스트</h4>
        <Button
          onClick={runAllTests}
          variant="secondary"
          className="text-sm"
        >
          모든 테스트 실행
        </Button>
      </div>

      {/* 개별 테스트 버튼들 */}
      <div className="grid grid-cols-1 gap-6">
        {tests.map((test) => (
          <div key={test.name} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h5 className="font-medium text-gray-900">{test.label}</h5>
                <p className="text-sm text-gray-600">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    test.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                    test.method === 'POST' ? 'bg-green-100 text-green-800' :
                    test.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {test.method}
                  </span>
                  <span className="ml-2 font-mono text-xs">{test.endpoint}</span>
                </p>
              </div>
            </div>
            
            {/* API별 개별 입력 폼 */}
            {renderApiInputs(test)}
            
            <Button
              onClick={test.action}
              disabled={loading[test.name] || (test.name === 'actualUpload' && !selectedFile)}
              variant="outline"
              className={`w-full mt-3 text-sm ${
                test.name === 'actualUpload' && !selectedFile ? 'opacity-50' : ''
              }`}
            >
              {loading[test.name] ? '테스트 중...' : 
               test.name === 'actualUpload' && !selectedFile ? '파일을 먼저 선택하세요' :
               '테스트 실행'}
            </Button>
            
            {/* 개별 테스트 결과 표시 */}
            {individualResults[test.name] && (
              <div className={`mt-3 p-3 rounded-lg border-l-4 text-sm ${
                individualResults[test.name].success
                  ? 'bg-green-50 border-green-400'
                  : 'bg-red-50 border-red-400'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium ${
                    individualResults[test.name].success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {individualResults[test.name].method} {individualResults[test.name].endpoint}
                  </span>
                  <span className="text-xs text-gray-500">
                    {individualResults[test.name].timestamp}
                  </span>
                </div>
                
                <div className="text-xs">
                  <div className={`font-medium ${
                    individualResults[test.name].success ? 'text-green-700' : 'text-red-700'
                  }`}>
                    Status: {individualResults[test.name].status}
                    {individualResults[test.name].responseTime && ` (${individualResults[test.name].responseTime})`}
                  </div>
                  
                  {individualResults[test.name].data && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
                        응답 데이터 보기
                      </summary>
                      <pre className="mt-1 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-32">
                        {JSON.stringify(individualResults[test.name].data, null, 2)}
                      </pre>
                    </details>
                  )}
                  
                  {individualResults[test.name].error && (
                    <div className="mt-1 text-red-600">
                      Error: {individualResults[test.name].error}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}