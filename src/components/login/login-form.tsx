import { Button, Input } from "@/components/shadcn";
import { useLogin } from "@/hooks/auth/use-login";

export default function LoginForm() {
  const { email, password, error, handleEmailChange, handlePasswordChange, handleSubmit } =
    useLogin();

  return (
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
        <div className="text-red-500 mt-4 mb-4 text-xs">{error}</div>
      </div>

      <Button type="submit" variant="mint" className="w-125 text-xs">
        로그인
      </Button>
    </form>
  );
}
