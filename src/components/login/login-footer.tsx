import { useNavigate } from "react-router";
import { GoogleButton } from "@/components/landing/google-button";

export default function LoginFooter() {
  const navigate = useNavigate();

  return (
    <>
      <hr className="border-t border-gray-600 bg-gray-600 h-px w-125 mt-1" />
      <GoogleButton />

      <div className="w-125 h-20 flex flex-col items-center justify-center text-white gap-3 pt-3">
        <span className="text-emerald-400 cursor-pointer hover:underline">비밀번호 찾기</span>

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
