import { useState } from "react"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("로그인 시도:", { email, password })
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>로그인</h1>
      <input placeholder="이메일" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">로그인</button>
    </form>
  )
}
