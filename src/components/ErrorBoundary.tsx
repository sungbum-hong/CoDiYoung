'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function ErrorBoundary() {
  const router = useRouter();

  // Simple error component without routing error detection



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
            onClick={() => router.push('/')}
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