import { useRouteError, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    // 404 에러인 경우 홈으로 리다이렉트
    if (error?.status === 404) {
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    }
  }, [error, navigate]);

  if (error?.status === 404) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-4">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-gray-600 mb-6">
            요청하신 페이지가 존재하지 않습니다.
            <br />
            잠시 후 홈페이지로 이동합니다.
          </p>
          <button
            onClick={() => navigate('/', { replace: true })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    );
  }

  // 기타 에러인 경우
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-red-600">오류 발생</h1>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          예상치 못한 오류가 발생했습니다
        </h2>
        <p className="text-gray-600 mb-6">
          잠시 후 다시 시도해주세요.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            새로고침
          </button>
          <button
            onClick={() => navigate('/', { replace: true })}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;