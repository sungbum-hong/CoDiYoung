import { useState } from 'react';
import { AuthService } from '../../../services/authService';
import Button from '../../../ui/Button';

export default function AuthApiTest({ onResult }) {
  const [testInputs, setTestInputs] = useState({
    email: 'test@test.com',
    password: 'testpassword',
    nickname: 'testuser',
    phoneNumber: '010-1234-5678',
    userCategory: 'coding',
    newPassword: 'newpassword123',
    currentPassword: 'testpassword',
    imageKey: 'user/test-image.png'
  });

  // 랜덤 테스트 데이터 생성 함수
  const generateRandomTestData = () => {
    const timestamp = Date.now();
    return {
      email: `test${timestamp}@test.com`,
      nickname: `testuser${timestamp}`,
      password: 'testpassword123'
    };
  };

  const [loading, setLoading] = useState({});
  const [individualResults, setIndividualResults] = useState({});

  const executeTest = async (testName, apiCall, method, endpoint) => {
    setLoading(prev => ({ ...prev, [testName]: true }));
    
    try {
      const startTime = Date.now();
      const result = await apiCall();
      const endTime = Date.now();
      
      // result가 응답 객체인 경우 실제 상태 코드 사용
      const actualStatus = result?.status || 200;
      const isSuccess = result?.success !== false && actualStatus >= 200 && actualStatus < 300;
      
      const resultData = {
        testName,
        method,
        endpoint,
        success: isSuccess,
        status: `${actualStatus} ${isSuccess ? 'OK' : 'Error'}`,
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
      name: 'signup',
      label: '회원가입 (일반: /api/auth/join)',
      method: 'POST',
      endpoint: '/api/auth/join',
      action: () => executeTest(
        'signup',
        () => AuthService.signUp({
          email: testInputs.email,
          password: testInputs.password,
          nickname: testInputs.nickname,
          phoneNumber: testInputs.phoneNumber || '',
          userCategory: testInputs.userCategory || 'coding'
        }),
        'POST',
        '/api/auth/join'
      )
    },
    {
      name: 'signup_admin',
      label: '회원가입 (Admin: /api/admin/create)',
      method: 'POST',
      endpoint: '/api/admin/create',
      action: () => executeTest(
        'signup_admin',
        () => AuthService.signUpAdmin({
          email: testInputs.email,
          password: testInputs.password,
          nickname: testInputs.nickname,
          phoneNumber: testInputs.phoneNumber || '',
          userCategory: testInputs.userCategory || 'coding'
        }),
        'POST',
        '/api/admin/create'
      )
    },
    {
      name: 'login',
      label: '로그인',
      method: 'POST',
      endpoint: '/api/auth/login',
      action: () => executeTest(
        'login',
        () => AuthService.login(testInputs.email, testInputs.password),
        'POST',
        '/api/auth/login'
      )
    },
    {
      name: 'logout',
      label: '로그아웃',
      method: 'POST',
      endpoint: '/api/auth/logout',
      action: () => executeTest(
        'logout',
        () => AuthService.logout(),
        'POST',
        '/api/auth/logout'
      )
    },
    {
      name: 'getCurrentUser',
      label: '현재 사용자 정보',
      method: 'GET',
      endpoint: 'localStorage',
      action: () => executeTest(
        'getCurrentUser',
        () => Promise.resolve(AuthService.getCurrentUser()),
        'GET',
        'localStorage (현재 사용자 정보)'
      )
    },
    {
      name: 'getMypage',
      label: '마이페이지 조회',
      method: 'GET',
      endpoint: '/api/mypage',
      action: () => executeTest(
        'getMypage',
        async () => {
          const response = await fetch('http://15.164.125.28:8080/api/mypage', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` }
          });
          const data = response.ok ? await response.json() : await response.text();
          return {
            status: response.status,
            success: response.ok,
            data: data
          };
        },
        'GET',
        '/api/mypage'
      )
    },
    {
      name: 'changePassword',
      label: '비밀번호 변경',
      method: 'PATCH',
      endpoint: '/api/mypage/password',
      action: () => executeTest(
        'changePassword',
        async () => {
          const response = await fetch('http://15.164.125.28:8080/api/mypage/password', {
            method: 'PATCH',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            },
            body: JSON.stringify({
              currentPassword: testInputs.currentPassword,
              newPassword: testInputs.newPassword
            })
          });
          const data = await response.text();
          return {
            status: response.status,
            success: response.ok,
            data: data
          };
        },
        'PATCH',
        '/api/mypage/password'
      )
    },
    {
      name: 'changeNickname',
      label: '닉네임 변경',
      method: 'PATCH',
      endpoint: '/api/mypage/nickname',
      action: () => executeTest(
        'changeNickname',
        async () => {
          const response = await fetch('http://15.164.125.28:8080/api/mypage/nickname', {
            method: 'PATCH',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            },
            body: JSON.stringify({
              nickname: testInputs.nickname
            })
          });
          const data = await response.text();
          return {
            status: response.status,
            success: response.ok,
            data: data
          };
        },
        'PATCH',
        '/api/mypage/nickname'
      )
    },
    {
      name: 'changeEmail',
      label: '이메일 변경',
      method: 'PATCH',
      endpoint: '/api/mypage/email',
      action: () => executeTest(
        'changeEmail',
        async () => {
          const response = await fetch('http://15.164.125.28:8080/api/mypage/email', {
            method: 'PATCH',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            },
            body: JSON.stringify({
              email: testInputs.email
            })
          });
          const data = await response.text();
          return {
            status: response.status,
            success: response.ok,
            data: data
          };
        },
        'PATCH',
        '/api/mypage/email'
      )
    },
    {
      name: 'changeImage',
      label: '이미지 변경',
      method: 'PATCH',
      endpoint: '/api/mypage/image',
      action: () => executeTest(
        'changeImage',
        async () => {
          const response = await fetch('http://15.164.125.28:8080/api/mypage/image', {
            method: 'PATCH',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            },
            body: JSON.stringify({
              imageKey: testInputs.imageKey
            })
          });
          const data = await response.text();
          return {
            status: response.status,
            success: response.ok,
            data: data
          };
        },
        'PATCH',
        '/api/mypage/image'
      )
    },
    {
      name: 'dbReset',
      label: 'DB 리셋 (개발용)',
      method: 'POST',
      endpoint: '/__dev/db/reset',
      action: () => executeTest(
        'dbReset',
        async () => {
          const response = await fetch('http://15.164.125.28:8080/__dev/db/reset', {
            method: 'POST'
          });
          const data = await response.text();
          return {
            status: response.status,
            success: response.ok,
            data: data
          };
        },
        'POST',
        '/__dev/db/reset'
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
      case 'signup':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">이메일 *</label>
              <input
                type="email"
                value={testInputs.email}
                onChange={(e) => setTestInputs(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="test@test.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">비밀번호 *</label>
              <input
                type="password"
                value={testInputs.password}
                onChange={(e) => setTestInputs(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="password"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">닉네임 *</label>
              <input
                type="text"
                value={testInputs.nickname}
                onChange={(e) => setTestInputs(prev => ({ ...prev, nickname: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="testuser"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">전화번호</label>
              <input
                type="text"
                value={testInputs.phoneNumber}
                onChange={(e) => setTestInputs(prev => ({ ...prev, phoneNumber: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="010-1234-5678"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">사용자 카테고리</label>
              <select
                value={testInputs.userCategory}
                onChange={(e) => setTestInputs(prev => ({ ...prev, userCategory: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              >
                <option value="coding">코딩</option>
                <option value="design">디자인</option>
                <option value="video_editing">영상편집</option>
              </select>
            </div>
          </div>
        );

      case 'signup_admin':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">이메일 *</label>
              <input
                type="email"
                value={testInputs.email}
                onChange={(e) => setTestInputs(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="test@test.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">비밀번호 *</label>
              <input
                type="password"
                value={testInputs.password}
                onChange={(e) => setTestInputs(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="password"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">닉네임 *</label>
              <input
                type="text"
                value={testInputs.nickname}
                onChange={(e) => setTestInputs(prev => ({ ...prev, nickname: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="testuser"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">전화번호</label>
              <input
                type="text"
                value={testInputs.phoneNumber}
                onChange={(e) => setTestInputs(prev => ({ ...prev, phoneNumber: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="010-1234-5678"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">사용자 카테고리</label>
              <select
                value={testInputs.userCategory}
                onChange={(e) => setTestInputs(prev => ({ ...prev, userCategory: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              >
                <option value="coding">코딩</option>
                <option value="design">디자인</option>
                <option value="video_editing">영상편집</option>
              </select>
            </div>
          </div>
        );
        
      case 'login':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">이메일</label>
              <input
                type="email"
                value={testInputs.email}
                onChange={(e) => setTestInputs(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="test@test.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">비밀번호</label>
              <input
                type="password"
                value={testInputs.password}
                onChange={(e) => setTestInputs(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="password"
              />
            </div>
          </div>
        );
        
      case 'changePassword':
        return (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">현재 비밀번호</label>
              <input
                type="password"
                value={testInputs.currentPassword}
                onChange={(e) => setTestInputs(prev => ({ ...prev, currentPassword: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="현재 비밀번호"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">새 비밀번호</label>
              <input
                type="password"
                value={testInputs.newPassword}
                onChange={(e) => setTestInputs(prev => ({ ...prev, newPassword: e.target.value }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                placeholder="새 비밀번호"
              />
            </div>
          </div>
        );
        
      case 'changeNickname':
        return (
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">새 닉네임</label>
            <input
              type="text"
              value={testInputs.nickname}
              onChange={(e) => setTestInputs(prev => ({ ...prev, nickname: e.target.value }))}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              placeholder="새 닉네임"
            />
          </div>
        );
        
      case 'changeEmail':
        return (
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">새 이메일</label>
            <input
              type="email"
              value={testInputs.email}
              onChange={(e) => setTestInputs(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              placeholder="new@email.com"
            />
          </div>
        );
        
      case 'changeImage':
        return (
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">이미지 키</label>
            <input
              type="text"
              value={testInputs.imageKey}
              onChange={(e) => setTestInputs(prev => ({ ...prev, imageKey: e.target.value }))}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
              placeholder="user/image.png"
            />
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
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium text-gray-900">테스트 입력값 설정</h4>
          <Button
            onClick={() => {
              const randomData = generateRandomTestData();
              setTestInputs(prev => ({
                ...prev,
                email: randomData.email,
                nickname: randomData.nickname,
                password: randomData.password
              }));
            }}
            variant="outline"
            className="text-sm"
          >
            랜덤 데이터 생성
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <input
              type="email"
              value={testInputs.email}
              onChange={(e) => setTestInputs(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="test@test.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              value={testInputs.password}
              onChange={(e) => setTestInputs(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              닉네임
            </label>
            <input
              type="text"
              value={testInputs.nickname}
              onChange={(e) => setTestInputs(prev => ({ ...prev, nickname: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="testuser"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              전화번호
            </label>
            <input
              type="text"
              value={testInputs.phoneNumber}
              onChange={(e) => setTestInputs(prev => ({ ...prev, phoneNumber: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="010-1234-5678"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              사용자 카테고리
            </label>
            <select
              value={testInputs.userCategory}
              onChange={(e) => setTestInputs(prev => ({ ...prev, userCategory: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="coding">코딩</option>
              <option value="design">디자인</option>
              <option value="video_editing">영상편집</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              현재 비밀번호
            </label>
            <input
              type="password"
              value={testInputs.currentPassword}
              onChange={(e) => setTestInputs(prev => ({ ...prev, currentPassword: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="현재 비밀번호"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              새 비밀번호
            </label>
            <input
              type="password"
              value={testInputs.newPassword}
              onChange={(e) => setTestInputs(prev => ({ ...prev, newPassword: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="새 비밀번호"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              이미지 키
            </label>
            <input
              type="text"
              value={testInputs.imageKey}
              onChange={(e) => setTestInputs(prev => ({ ...prev, imageKey: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="user/test-image.png"
            />
          </div>
        </div>
      </div>

      {/* 전체 테스트 실행 버튼 */}
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">인증 API 테스트</h4>
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
                    test.method === 'PATCH' ? 'bg-orange-100 text-orange-800' :
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