import Link from 'next/link';
import { CONFIG } from '../constants/config';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-2xl font-bold mb-4">구현중인 페이지 입니다.</h2>
      <p className="text-gray-600 mb-8">찾으시는 페이지는 현재 준비 중이거나 존재하지 않습니다.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
