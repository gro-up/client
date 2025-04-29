import { useNavigate } from "react-router";
export default function ResetPasswordFooter() {
  const navigate = useNavigate();
  return (
    <div className="w-125 flex flex-col text-white justify-center gap-5 pt-3">
      <div className="flex gap-1 justify-center">
        <span>아이디가 없으신가요?</span>
        <span
          onClick={() => navigate("/signup")}
          className="text-emerald-400 cursor-pointer hover:underline"
        >
          회원가입하기
        </span>
      </div>
    </div>
  );
}
