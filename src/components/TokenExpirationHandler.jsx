"use client";

import { useEffect } from "react";

export default function TokenExpirationHandler() {
  useEffect(() => {
    // Mock Mode: No token checks
    return () => {};
  }, []);

  // 이 컴포넌트는 UI를 렌더링하지 않음
  return null;
}