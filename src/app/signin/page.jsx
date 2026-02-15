"use client";

import { useRouter } from "next/navigation";
import SignInPage from "../../feature/SignIn/SignInPage";

export default function Page() {
  const router = useRouter();
  return <SignInPage onClose={() => router.push('/')} />;
}
