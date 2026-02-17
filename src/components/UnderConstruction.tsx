"use client";

import Link from "next/link";
import { COLORS } from "../constants/colors";

export default function UnderConstruction({ title = "페이지 준비 중" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <div className="text-6xl mb-4">🚧</div>
      <h1 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.GRAY_900 }}>
        {title}
      </h1>
      <p className="text-lg text-gray-600 max-w-md">
        현재 페이지는 리팩토링 및 기능 개선 작업 중에 있습니다.<br />
        빠른 시일 내에 찾아뵙겠습니다.
      </p>
      <Link 
        href="/"
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
