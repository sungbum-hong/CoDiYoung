"use client";

import { useEffect } from "react";
import useAuthStore from "../features/auth/model/authStore";

export default function AuthInitializer() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return null;
}
