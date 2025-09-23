import { useState } from 'react';
import { ProjectService } from '../../../services/projectService';
import Button from '../../../ui/Button';

export default function ProjectApiTest({ onResult }) {
  const [testInputs, setTestInputs] = useState({
    projectId: '1',
    userId: '1',
    title: '테스트 프로젝트',
    description: '프로젝트 설명',
    imageKey: 'project/test-project.png',
    slogan: '함께 성장하는 팀',
    capacity: 5,
    positions: ['백엔드 개발자', '프론트엔드 개발자'],
    techs: ['React', 'Node.js', 'MySQL'],
    questions: ['자기소개를 해주세요'],
    kakaoLink: 'https://open.kakao.com/o/test123',
    // 프로젝트 신청용 필드들
    applyPosition: '백엔드 개발자',
    applyTechs: 'React, Node.js',
    questionId: '1',
    answer: '안녕하세요, 저는 백엔드 개발자입니다.'
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
      name: 'createProject',
      label: '프로젝트 생성',
      method: 'POST',
      endpoint: '/api/project/create',
      action: () => executeTest(
        'createProject',
        () => {
          const requestData = {
            title: String(testInputs.title),
            description: String(testInputs.description),
            imageKey: String(testInputs.imageKey),
            slogan: String(testInputs.slogan),
            capacity: parseInt(testInputs.capacity) || 5,
            positions: Array.isArray(testInputs.positions) ? testInputs.positions : [],
            techs: Array.isArray(testInputs.techs) ? testInputs.techs : [],
            questions: Array.isArray(testInputs.questions) ? testInputs.questions : [String(testInputs.questions)],
            kakaoLink: String(testInputs.kakaoLink)
          };
          
          console.log('=== 프로젝트 생성 API 호출 ===');
          console.log('요청 데이터:', requestData);
          console.log('데이터 타입 확인:');
          console.log('- title:', typeof requestData.title, '값:', requestData.title);
          console.log('- description:', typeof requestData.description, '값:', requestData.description);
          console.log('- imageKey:', typeof requestData.imageKey, '값:', requestData.imageKey);
          console.log('- slogan:', typeof requestData.slogan, '값:', requestData.slogan);
          console.log('- capacity:', typeof requestData.capacity, '값:', requestData.capacity);
          console.log('- positions:', typeof requestData.positions, Array.isArray(requestData.positions), '값:', requestData.positions);
          console.log('- techs:', typeof requestData.techs, Array.isArray(requestData.techs), '값:', requestData.techs);
          console.log('- questions:', typeof requestData.questions, '값:', requestData.questions);
          console.log('- kakaoLink:', typeof requestData.kakaoLink, '값:', requestData.kakaoLink);
          console.log('JSON 직렬화 테스트:', JSON.stringify(requestData, null, 2));
          
          return ProjectService.createProject(requestData);
        },
        'POST',
        '/api/project/create'
      )
    },
    {
      name: 'getProject',
      label: '단일 프로젝트 조회',
      method: 'GET',
      endpoint: '/api/project/{projectId}',
      action: () => executeTest(
        'getProject',
        () => ProjectService.getProject(testInputs.projectId),
        'GET',
        `/api/project/${testInputs.projectId}`
      )
    },
    {
      name: 'getAllProjects',
      label: '프로젝트 전체 조회',
      method: 'GET',
      endpoint: '/api/project/findAll',
      action: () => executeTest(
        'getAllProjects',
        () => fetch(`http://15.164.125.28:8080/api/project/findAll?page=${testInputs.page || 0}&size=${testInputs.size || 10}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` }
        }).then(res => res.json()),
        'GET',
        `/api/project/findAll?page=${testInputs.page || 0}&size=${testInputs.size || 10}`
      )
    },
    {
      name: 'getProgressingProjects',
      label: '진행중인 프로젝트 조회',
      method: 'GET',
      endpoint: '/api/project/find/progressing',
      action: () => executeTest(
        'getProgressingProjects',
        () => ProjectService.getProgressingProjects(),
        'GET',
        '/api/project/find/progressing'
      )
    },
    {
      name: 'getAppliedProjects',
      label: '신청중인 프로젝트 조회',
      method: 'GET',
      endpoint: '/api/project/find/applied',
      action: () => executeTest(
        'getAppliedProjects',
        () => ProjectService.getAppliedProjects(),
        'GET',
        '/api/project/find/applied'
      )
    },
    {
      name: 'applyToProject',
      label: '프로젝트 신청',
      method: 'POST',
      endpoint: '/api/project/apply/{projectId}',
      action: () => executeTest(
        'applyToProject',
        () => {
          const applyData = {
            projectId: parseInt(testInputs.projectId),
            position: testInputs.applyPosition || '백엔드 개발자',
            techs: testInputs.applyTechs || 'React, Node.js',
            answers: [
              {
                questionId: parseInt(testInputs.questionId) || 1,
                answer: testInputs.answer || '안녕하세요, 저는 백엔드 개발자입니다.'
              }
            ]
          };
          
          console.log('=== 프로젝트 신청 API 호출 ===');
          console.log('신청 데이터:', applyData);
          
          return ProjectService.applyToProject(testInputs.projectId, applyData);
        },
        'POST',
        `/api/project/apply/${testInputs.projectId}`
      )
    },
    {
      name: 'getProjectApplicants',
      label: '프로젝트 신청자 목록 조회',
      method: 'GET',
      endpoint: '/api/project/projectApplication/{projectId}/applicants',
      action: () => executeTest(
        'getProjectApplicants',
        () => ProjectService.getProjectApplicants(testInputs.projectId),
        'GET',
        `/api/project/projectApplication/${testInputs.projectId}/applicants`
      )
    },
    {
      name: 'getProjectQuestions',
      label: '프로젝트 질문 조회',
      method: 'GET',
      endpoint: '/api/projectApplication/questions/{projectId}',
      action: () => executeTest(
        'getProjectQuestions',
        () => ProjectService.getProjectQuestions(testInputs.projectId),
        'GET',
        `/api/projectApplication/questions/${testInputs.projectId}`
      )
    },
    {
      name: 'approveApplicant',
      label: '프로젝트 신청자 승인',
      method: 'POST',
      endpoint: '/api/projectApplication/{projectId}/applicants/{userId}/approve',
      action: () => executeTest(
        'approveApplicant',
        () => ProjectService.approveApplicant(testInputs.projectId, testInputs.userId),
        'POST',
        `/api/projectApplication/${testInputs.projectId}/applicants/${testInputs.userId}/approve`
      )
    },
    {
      name: 'rejectApplicant',
      label: '프로젝트 신청자 거절',
      method: 'POST',
      endpoint: '/api/projectApplication/{projectId}/applicants/{userId}/reject',
      action: () => executeTest(
        'rejectApplicant',
        () => ProjectService.rejectApplicant(testInputs.projectId, testInputs.userId),
        'POST',
        `/api/projectApplication/${testInputs.projectId}/applicants/${testInputs.userId}/reject`
      )
    },
    {
      name: 'completeProject',
      label: '프로젝트 완료하기',
      method: 'POST',
      endpoint: '/api/projectApplication/complete/{projectId}',
      action: () => executeTest(
        'completeProject',
        () => fetch(`http://15.164.125.28:8080/api/projectApplication/complete/${testInputs.projectId}`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` }
        }).then(res => res.text()),
        'POST',
        `/api/projectApplication/complete/${testInputs.projectId}`
      )
    },
    {
      name: 'cancelProject',
      label: '프로젝트 취소하기',
      method: 'POST',
      endpoint: '/api/projectApplication/cancel/{projectId}',
      action: () => executeTest(
        'cancelProject',
        () => fetch(`http://15.164.125.28:8080/api/projectApplication/cancel/${testInputs.projectId}`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` }
        }).then(res => res.text()),
        'POST',
        `/api/projectApplication/cancel/${testInputs.projectId}`
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
      case 'createProject':
        return (
          <div className="space-y-3 mb-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">프로젝트 제목</label>
                <input
                  type="text"
                  value={testInputs.title}
                  onChange={(e) => setTestInputs(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="테스트 프로젝트"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">모집 정원</label>
                <input
                  type="number"
                  value={testInputs.capacity}
                  onChange={(e) => setTestInputs(prev => ({ ...prev, capacity: e.target.value }))}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="5"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">프로젝트 설명</label>
              <textarea
                value={testInputs.description}
                onChange={(e) => setTestInputs(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs h-16"
                placeholder="프로젝트 설명"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">이미지 키</label>
                <input
                  type="text"
                  value={testInputs.imageKey}
                  onChange={(e) => setTestInputs(prev => ({ ...prev, imageKey: e.target.value }))}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="project/test-project.png"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">슬로건</label>
                <input
                  type="text"
                  value={testInputs.slogan}
                  onChange={(e) => setTestInputs(prev => ({ ...prev, slogan: e.target.value }))}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="함께 성장하는 팀"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">모집 포지션 (콤마로 구분)</label>
              <input
                type="text"
                value={testInputs.positions.join(', ')}
                onChange={(e) => setTestInputs(prev => ({ ...prev, positions: e.target.value.split(', ').filter(p => p.trim()) }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="백엔드 개발자, 프론트엔드 개발자"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">기술 스택 (콤마로 구분)</label>
              <input
                type="text"
                value={testInputs.techs.join(', ')}
                onChange={(e) => setTestInputs(prev => ({ ...prev, techs: e.target.value.split(', ').filter(t => t.trim()) }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="React, Node.js, MySQL"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">지원 질문 (줄바꿈으로 구분)</label>
              <textarea
                value={testInputs.questions.join('\n')}
                onChange={(e) => setTestInputs(prev => ({ ...prev, questions: e.target.value.split('\n').filter(q => q.trim()) }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs h-16"
                placeholder="자기소개를 해주세요&#10;이 프로젝트에 지원하는 이유는?"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">카카오톡 링크</label>
              <input
                type="text"
                value={testInputs.kakaoLink}
                onChange={(e) => setTestInputs(prev => ({ ...prev, kakaoLink: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="https://open.kakao.com/o/test123"
              />
            </div>
          </div>
        );
        
      case 'getProject':
      case 'getProjectApplicants':
      case 'getProjectQuestions':
      case 'completeProject':
      case 'cancelProject':
        return (
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">프로젝트 ID</label>
            <input
              type="text"
              value={testInputs.projectId}
              onChange={(e) => setTestInputs(prev => ({ ...prev, projectId: e.target.value }))}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              placeholder="1"
            />
          </div>
        );
        
      case 'applyToProject':
        return (
          <div className="space-y-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">프로젝트 ID</label>
              <input
                type="number"
                value={testInputs.projectId}
                onChange={(e) => setTestInputs(prev => ({ ...prev, projectId: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="1"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">지원 포지션</label>
              <input
                type="text"
                value={testInputs.applyPosition || '백엔드 개발자'}
                onChange={(e) => setTestInputs(prev => ({ ...prev, applyPosition: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="백엔드 개발자"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">기술 스택</label>
              <input
                type="text"
                value={testInputs.applyTechs || 'React, Node.js'}
                onChange={(e) => setTestInputs(prev => ({ ...prev, applyTechs: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="React, Node.js"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">질문 ID</label>
              <input
                type="number"
                value={testInputs.questionId || ''}
                onChange={(e) => setTestInputs(prev => ({ ...prev, questionId: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="1"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">답변</label>
              <textarea
                value={testInputs.answer || ''}
                onChange={(e) => setTestInputs(prev => ({ ...prev, answer: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs h-16"
                placeholder="자기소개를 해주세요"
              />
            </div>
          </div>
        );
        
      case 'approveApplicant':
      case 'rejectApplicant':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">프로젝트 ID</label>
              <input
                type="text"
                value={testInputs.projectId}
                onChange={(e) => setTestInputs(prev => ({ ...prev, projectId: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="1"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">사용자 ID</label>
              <input
                type="text"
                value={testInputs.userId}
                onChange={(e) => setTestInputs(prev => ({ ...prev, userId: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="1"
              />
            </div>
          </div>
        );
        
      case 'getAllProjects':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">페이지</label>
              <input
                type="number"
                value="0"
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="0"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">크기</label>
              <input
                type="number"
                value="10"
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="10"
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
              프로젝트 ID
            </label>
            <input
              type="text"
              value={testInputs.projectId}
              onChange={(e) => setTestInputs(prev => ({ ...prev, projectId: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              사용자 ID
            </label>
            <input
              type="text"
              value={testInputs.userId}
              onChange={(e) => setTestInputs(prev => ({ ...prev, userId: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              프로젝트 제목
            </label>
            <input
              type="text"
              value={testInputs.title}
              onChange={(e) => setTestInputs(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="테스트 프로젝트"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              모집 정원
            </label>
            <input
              type="number"
              value={testInputs.capacity}
              onChange={(e) => setTestInputs(prev => ({ ...prev, capacity: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="5"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              프로젝트 설명
            </label>
            <textarea
              value={testInputs.description}
              onChange={(e) => setTestInputs(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-20"
              placeholder="프로젝트 설명"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              카카오톡 링크
            </label>
            <input
              type="text"
              value={testInputs.kakaoLink}
              onChange={(e) => setTestInputs(prev => ({ ...prev, kakaoLink: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="https://open.kakao.com/o/test123"
            />
          </div>
        </div>
      </div>

      {/* 전체 테스트 실행 버튼 */}
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">프로젝트 API 테스트</h4>
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