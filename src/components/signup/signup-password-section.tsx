import { Input } from "../shadcn";

type PasswordSectionProps = {
  password: string;
  confirmPassword: string;
  passwordComplexityError: string;
  passwordMatchError: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordSection({
  password,
  confirmPassword,
  passwordComplexityError,
  passwordMatchError,
  handlePasswordChange,
  handleConfirmPasswordChange,
}: PasswordSectionProps) {
  return (
    <div>
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
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

      {passwordComplexityError ? (
        <div className="text-red-500 mt-4 text-xs">{passwordComplexityError}</div>
      ) : passwordMatchError ? (
        <div className="text-red-500 mt-2 text-xs">{passwordMatchError}</div>
      ) : null}
    </div>
  );
}
