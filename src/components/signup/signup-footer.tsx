import { useNavigate } from "react-router";
export default function SignupFooter() {
  const navigate = useNavigate();
  return (
    <div className="w-125 flex flex-col text-white justify-center gap-5 pt-3">
      <div className="w-full flex justify-center text-emerald-400 ">
        <span onClick={() => navigate("reset-password")} className="cursor-pointer hover:underline">
          비밀번호 찾기
        </span>
      </div>
      <div className="flex gap-1 justify-center">
        <span>아이디가 있으신가요?</span>
        <span
          onClick={() => navigate("/login")}
          className="text-emerald-400 cursor-pointer hover:underline"
        >
          로그인하기
        </span>
      </div>
    </div>
  );
}
