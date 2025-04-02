import { GoogleIcon } from '@/components/icons/google';
import { Button } from '@/components/shadcn';

import { useGoogleLoggedIn } from '@/hooks/auth';

export const GoogleButton = () => {
  const { signInWithGoogle } = useGoogleLoggedIn();

  return (
    <Button onClick={signInWithGoogle}>
      <GoogleIcon className="w-4 h-4" />
      Google에서 시작하기
    </Button>
  );
};
