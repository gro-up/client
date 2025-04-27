import { Input } from "@/components/shadcn";
export default function SignupPage() {
  return (
    <>
      <div className="h-11 w-125 text-white flex justify-center gap-2 ">
        Gro 회원가입
      </div>

      <form>
        <div>
          <Input
            type="email"
            className="h-11 w-125 rounded-b-none !placeholder-white placeholder:text-xs text-white"
            placeholder="이메일을 입력해주세요."
          />
        </div>
      </form>

      <div className="flex gap-1 justify-center">
        <span className="text-white">아이디가 있으신가요?</span>
        <span className="text-emerald-400 cursor-pointer hover:underline">
          로그인하기
        </span>
      </div>
    </>
  );
}
