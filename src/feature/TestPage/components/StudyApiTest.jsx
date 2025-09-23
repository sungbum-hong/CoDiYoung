import { useState } from 'react';
import { StudyService } from '../../../services/studyService';
import Button from '../../../ui/Button';

export default function StudyApiTest({ onResult }) {
  const [testInputs, setTestInputs] = useState({
    studyId: '1',
    content: '<p>테스트 스터디 내용입니다</p>',
    page: '0',
    size: '30'
  });

  const [loading, setLoading] = useState({});
  const [individualResults, setIndividualResults] = useState({});

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

  const tests = [
    {
      name: 'createStudy',
      label: '스터디 생성',
      method: 'POST',
      endpoint: '/api/study/create',
      action: () => executeTest(
        'createStudy',
        () => StudyService.createStudy(testInputs.content, []),
        'POST',
        '/api/study/create'
      )
    },
    {
      name: 'getStudy',
      label: '스터디 조회',
      method: 'GET',
      endpoint: '/api/study/{studyId}',
      action: () => executeTest(
        'getStudy',
        () => StudyService.getStudy(testInputs.studyId),
        'GET',
        `/api/study/${testInputs.studyId}`
      )
    },
    {
      name: 'updateStudy',
      label: '스터디 수정',
      method: 'PUT',
      endpoint: '/api/study/update/study/{studyId}',
      action: () => executeTest(
        'updateStudy',
        () => StudyService.updateStudy(testInputs.studyId, testInputs.content, []),
        'PUT',
        `/api/study/update/study/${testInputs.studyId}`
      )
    },
    {
      name: 'deleteStudy',
      label: '스터디 삭제',
      method: 'DELETE',
      endpoint: '/api/study/delete/{studyId}',
      action: () => executeTest(
        'deleteStudy',
        () => StudyService.deleteStudy(testInputs.studyId),
        'DELETE',
        `/api/study/delete/${testInputs.studyId}`
      )
    },
    {
      name: 'getUserStudies',
      label: '유저의 스터디 목록 조회',
      method: 'GET',
      endpoint: '/api/study/users/studies',
      action: () => executeTest(
        'getUserStudies',
        () => fetch(`http://15.164.125.28:8080/api/study/users/studies?page=${testInputs.page}&size=${testInputs.size}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` }
        }).then(res => res.json()),
        'GET',
        `/api/study/users/studies?page=${testInputs.page}&size=${testInputs.size}`
      )
    },
    {
      name: 'getGroupedStudies',
      label: '카테고리별 스터디 그룹 조회',
      method: 'GET',
      endpoint: '/api/study/category/grouped',
      action: () => executeTest(
        'getGroupedStudies',
        () => StudyService.getGroupedStudies(),
        'GET',
        '/api/study/category/grouped'
      )
    },
    {
      name: 'checkAttendance',
      label: '출석 체크',
      method: 'POST',
      endpoint: '/api/attendance/check',
      action: () => executeTest(
        'checkAttendance',
        () => StudyService.checkAttendance(),
        'POST',
        '/api/attendance/check'
      )
    },
    {
      name: 'getAttendanceCalendar',
      label: '출석 달력 조회',
      method: 'GET',
      endpoint: '/api/attendance/calendar',
      action: () => executeTest(
        'getAttendanceCalendar',
        () => StudyService.getAttendanceCalendar(),
        'GET',
        '/api/attendance/calendar'
      )
    },
    {
      name: 'presignUrl',
      label: '이미지 업로드 URL 발급',
      method: 'POST',
      endpoint: '/storage/presign',
      action: () => executeTest(
        'presignUrl',
        () => fetch('http://15.164.125.28:8080/storage/presign', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
          },
          body: JSON.stringify({
            originalFilename: 'test.jpg',
            contentType: 'image/jpeg'
          })
        }).then(res => res.json()),
        'POST',
        '/storage/presign'
      )
    },
    {
      name: 'healthCheck',
      label: '헬스 체크',
      method: 'GET',
      endpoint: '/health',
      action: () => executeTest(
        'healthCheck',
        () => fetch('http://15.164.125.28:8080/health').then(res => res.text()),
        'GET',
        '/health'
      )
    }
  ];

  const runAllTests = async () => {
    for (const test of tests) {
      await test.action();
      // 각 테스트 사이에 500ms 지연
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  // API별 개별 입력 폼 렌더링
  const renderApiInputs = (test) => {
    switch(test.name) {
      case 'createStudy':
        return (
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">스터디 내용 (HTML)</label>
            <textarea
              value={testInputs.content}
              onChange={(e) => setTestInputs(prev => ({ ...prev, content: e.target.value }))}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs h-16"
              placeholder="<p>테스트 스터디 내용</p>"
            />
          </div>
        );
        
      case 'getStudy':
      case 'updateStudy':
      case 'deleteStudy':
        return (
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">스터디 ID</label>
            <input
              type="text"
              value={testInputs.studyId}
              onChange={(e) => setTestInputs(prev => ({ ...prev, studyId: e.target.value }))}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              placeholder="1"
            />
            {test.name === 'updateStudy' && (
              <div className="mt-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">수정할 내용</label>
                <textarea
                  value={testInputs.content}
                  onChange={(e) => setTestInputs(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs h-16"
                  placeholder="<p>수정할 스터디 내용</p>"
                />
              </div>
            )}
          </div>
        );
        
      case 'getUserStudies':
      case 'getAllStudies':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">페이지</label>
              <input
                type="number"
                value={testInputs.page}
                onChange={(e) => setTestInputs(prev => ({ ...prev, page: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">크기</label>
              <input
                type="number"
                value={testInputs.size}
                onChange={(e) => setTestInputs(prev => ({ ...prev, size: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="30"
              />
            </div>
          </div>
        );
        
      case 'presignUrl':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">파일명</label>
              <input
                type="text"
                value="test.jpg"
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="test.jpg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">컨텐츠 타입</label>
              <input
                type="text"
                value="image/jpeg"
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="image/jpeg"
                readOnly
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* 테스트 입력값 설정 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-3">테스트 입력값 설정</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              스터디 ID
            </label>
            <input
              type="text"
              value={testInputs.studyId}
              onChange={(e) => setTestInputs(prev => ({ ...prev, studyId: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              페이지 / 크기
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={testInputs.page}
                onChange={(e) => setTestInputs(prev => ({ ...prev, page: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="0"
              />
              <input
                type="number"
                value={testInputs.size}
                onChange={(e) => setTestInputs(prev => ({ ...prev, size: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="30"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              스터디 내용 (HTML)
            </label>
            <textarea
              value={testInputs.content}
              onChange={(e) => setTestInputs(prev => ({ ...prev, content: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-20"
              placeholder="<p>테스트 스터디 내용</p>"
            />
          </div>
        </div>
      </div>

      {/* 전체 테스트 실행 버튼 */}
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">스터디 API 테스트</h4>
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
              disabled={loading[test.name]}
              variant="outline"
              className="w-full mt-3 text-sm"
            >
              {loading[test.name] ? '테스트 중...' : '테스트 실행'}
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