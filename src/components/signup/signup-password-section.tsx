import { Input } from "../shadcn";

type PasswordSectionProps = {
  password: string;
  confirmPassword: string;
  passwordError: string;
  setPassword: (password: string) => void;
  handleConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordSection({
  password,
  confirmPassword,
  passwordError,
  setPassword,
  handleConfirmPasswordChange,
}: PasswordSectionProps) {
  return (
    <div>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-11 w-125 !placeholder-white placeholder:text-xs text-white rounded-b-none"
        placeholder="패스워드를 입력해주세요."
      />
      <Input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        className="h-11 w-125 !placeholder-white placeholder:text-xs text-white rounded-t-none"
        placeholder="패스워드를 확인해주세요."
      />
      <div className="text-red-500 mt-4 mb-2 text-xs">{passwordError}</div>
    </div>
  );
}
