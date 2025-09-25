import { useState } from 'react';
import StudyApiTest from './components/StudyApiTest';
import ProjectApiTest from './components/ProjectApiTest';
import AuthApiTest from './components/AuthApiTest';
import StorageApiTest from './components/StorageApiTest';
import Button from '../../ui/Button';
import { COLORS } from '../../utils/colors';

export default function TestPage() {
  const [activeTab, setActiveTab] = useState('study');
  const [globalResults, setGlobalResults] = useState([]);
  const [isRunningAllTests, setIsRunningAllTests] = useState(false);

  const tabs = [
    { id: 'study', label: '스터디 & 출석 API', component: StudyApiTest },
    { id: 'project', label: '프로젝트 & 신청 API', component: ProjectApiTest },
    { id: 'auth', label: '인증 & 마이페이지 API', component: AuthApiTest },
    { id: 'storage', label: '스토리지 API', component: StorageApiTest },
  ];

  const addResult = (result) => {
    const timestamp = new Date().toLocaleString();
    setGlobalResults(prev => [{
      ...result,
      timestamp,
      id: Date.now()
    }, ...prev].slice(0, 100)); // 최근 100개로 증가
  };

  const clearResults = () => {
    setGlobalResults([]);
  };

  // 모든 탭의 테스트 실행
  const runAllTabTests = async () => {
    setIsRunningAllTests(true);
    clearResults();
    
    addResult({
      testName: 'startAllTests',
      method: 'INFO',
      endpoint: '전체 테스트 시작',
      success: true,
      status: 'STARTED',
      data: { message: '🚀 모든 API 테스트를 시작합니다...' },
      timestamp: new Date().toLocaleString()
    });

    // 각 탭별로 순차 실행
    const testOrder = ['auth', 'study', 'project', 'storage'];
    
    for (const tabId of testOrder) {
      addResult({
        testName: `${tabId}TestStart`,
        method: 'INFO', 
        endpoint: `${tabs.find(t => t.id === tabId)?.label} 테스트`,
        success: true,
        status: 'RUNNING',
        data: { message: `${tabs.find(t => t.id === tabId)?.label} 테스트 실행 중...` },
        timestamp: new Date().toLocaleString()
      });
      
      setActiveTab(tabId);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 탭 전환 시간
      
      // 해당 탭의 모든 테스트 실행 (실제 구현은 각 컴포넌트에서)
      const event = new CustomEvent(`runAll${tabId.charAt(0).toUpperCase() + tabId.slice(1)}Tests`);
      window.dispatchEvent(event);
      
      await new Promise(resolve => setTimeout(resolve, 3000)); // 테스트 완료 대기
    }
    
    addResult({
      testName: 'completeAllTests',
      method: 'INFO',
      endpoint: '전체 테스트 완료',
      success: true,
      status: 'COMPLETED',
      data: { message: '✅ 모든 API 테스트가 완료되었습니다!' },
      timestamp: new Date().toLocaleString()
    });
    
    setIsRunningAllTests(false);
  };

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">API 테스트 페이지</h1>
              <p className="text-gray-600 mt-1">모든 API 엔드포인트를 한 곳에서 테스트</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="primary" 
                onClick={runAllTabTests}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                🚀 전체 테스트 실행
              </Button>
              <Button 
                variant="outline" 
                onClick={clearResults}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                결과 초기화
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽: API 테스트 영역 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* 탭 헤더 */}
              <div className="border-b border-gray-200">
                <div className="flex space-x-0">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600 bg-blue-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 탭 컨텐츠 */}
              <div className="p-6">
                {ActiveComponent && (
                  <ActiveComponent onResult={addResult} />
                )}
              </div>
            </div>
          </div>

          {/* 오른쪽: 결과 로그 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm h-full">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">API 응답 로그</h3>
                <p className="text-sm text-gray-600">최근 {globalResults.length}/50</p>
              </div>
              
              <div className="p-4 h-96 overflow-y-auto">
                {globalResults.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <p>아직 API 테스트 결과가 없습니다.</p>
                    <p className="text-sm mt-1">왼쪽에서 API를 테스트해보세요!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {globalResults.map((result) => (
                      <div
                        key={result.id}
                        className={`p-3 rounded-lg border-l-4 ${
                          result.success
                            ? 'bg-green-50 border-green-400'
                            : 'bg-red-50 border-red-400'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-medium ${
                            result.success ? 'text-green-800' : 'text-red-800'
                          }`}>
                            {result.method} {result.endpoint}
                          </span>
                          <span className="text-xs text-gray-500">
                            {result.timestamp}
                          </span>
                        </div>
                        
                        <div className="text-xs">
                          <div className={`font-medium ${
                            result.success ? 'text-green-700' : 'text-red-700'
                          }`}>
                            Status: {result.status || 'Unknown'}
                          </div>
                          
                          {result.data && (
                            <details className="mt-2">
                              <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
                                응답 데이터 보기
                              </summary>
                              <pre className="mt-1 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-32">
                                {JSON.stringify(result.data, null, 2)}
                              </pre>
                            </details>
                          )}
                          
                          {result.error && (
                            <div className="mt-1 text-red-600">
                              Error: {result.error}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}