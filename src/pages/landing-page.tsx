import { GoogleButton } from "@/components/landing/google-button";
import { Button, Input } from "@/components/shadcn";

import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-11 w-125  text-white flex justify-center items-center ">
        <div className="text-2xl">Gro 로그인</div>
      </div>
      <div>
        <Input
          className="h-11 w-125 rounded-b-none !placeholder-white placeholder:text-xs text-white "
          placeholder="이메일을 입력해주세요."
        />
        <Input
          className="h-11 w-125 rounded-t-none !placeholder-white placeholder:text-xs text-white "
          placeholder="패스워드를 입력해주세요."
        />
      </div>
      <Button variant="mint" className="w-125 text-xs ">
        로그인
      </Button>
      <hr className="border-t border-gray-600 bg-gray-600 h-px w-125" />
      <GoogleButton />
      <div className="w-125 h-20 flex flex-col items-center justify-center text-white gap-3 pt-3">
        <span className="text-emerald-400">비밀번호 찾기</span>

        <div className="flex gap-1">
          <span className="">아이디가 없으신가요?</span>
          <button
            className="text-emerald-400 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            회원가입하기
          </button>
        </div>
      </div>
    </>
  );
}
