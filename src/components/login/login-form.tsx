import { Button, Input } from "@/components/shadcn";
import { useLogin } from "@/hooks/auth/use-login";
import { Loader2 } from "lucide-react";
export default function LoginForm() {
  const {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    isPending,
  } = useLogin();

  return (
    <>
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Loader2 className="w-10 h-10 text-white animate-spin" />
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
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
          <div className="text-red-500 mt-2 mb-4 text-xs">{error}</div>
        </div>

        <Button type="submit" variant="mint" className="w-125 text-xs">
          로그인
        </Button>
      </form>
    </>
  );
}
