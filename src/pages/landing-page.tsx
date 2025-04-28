import { GoogleButton } from "@/components/landing/google-button";
import { Button, Input } from "@/components/shadcn";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  // 이메일과 비밀번호 상태 저장
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 에러 메세지 상태 저장
  const [error, setError] = useState("");

  // 이메일과 비밀번호 유효성 검사 함수
  const validate = (email: string, password: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검사용 정규식
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // 특수문자 포함 검사용 정규식

    // 이메일이 틀리거나, 비밀번호가 8자 미만이거나, 특수문자가 없으면 에러
    if (!emailRegex.test(email) || password.length < 8 || !specialCharRegex.test(password)) {
      setError("유효하지 않은 이메일 혹은 패스워드입니다."); // 에러 메세지 설정
      return false; // 유효성 검사 실패
    } else {
      setError(""); // 에러 없음
      return true; // 유효성 검사 성공
    }
  };

  // 이메일 인풋 변경 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value); // 이메일 상태 업데이트
    validate(value, password); // 실시간 유효성 검사
  };

  // 비밀번호 인풋 변경 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value); // 비밀번호 상태 업데이트
    validate(email, value); // 실시간 유효성 검사
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 새로고침 동작 막기

    const isValid = validate(email, password); // 최종 유효성 검사
    if (isValid) {
      console.log("로그인 시도", { email, password }); // 로그인 성공 시 처리 (API 호출 예정)
      // TODO: 여기에 로그인 API 호출 추가 예정
    }
  };

  return (
    <>
      <div className="h-11 w-125 text-white flex justify-center items-center">
        <div className="text-2xl">Gro 로그인</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="h-11 w-125 rounded-b-none !placeholder-white placeholder:text-xs text-white"
            placeholder="이메일을 입력해주세요."
          />

          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="h-11 w-125 rounded-t-none !placeholder-white placeholder:text-xs text-white"
            placeholder="패스워드를 입력해주세요."
          />
          <div className="text-red-500 mt-4 mb-4 text-xs">{error}</div>
        </div>

        <Button type="submit" variant="mint" className="w-125 text-xs">
          로그인
        </Button>
      </form>

      <hr className="border-t border-gray-600 bg-gray-600 h-px w-125" />

      <GoogleButton />

      <div className="w-125 h-20 flex flex-col items-center justify-center text-white gap-3 pt-3">
        <span className="text-emerald-400">비밀번호 찾기</span>

        <div className="flex gap-1">
          <span>아이디가 없으신가요?</span>
          <span
            onClick={() => navigate("/signup")}
            className="text-emerald-400 cursor-pointer hover:underline"
          >
            회원가입하기
          </span>
        </div>
      </div>
    </>
  );
}
