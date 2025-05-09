import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { firebaseAuth, firebaseProvider } from '@/firebase/auth';
import { ON_STEP_TOKEN_NAME, useCookies } from './use-cookies';
import { useNavigate } from 'react-router';
import { ROUTER_PATH } from '@/router';
import { toast } from 'sonner';

export const useGoogleLoggedIn = () => {
  const { setCookie } = useCookies();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, firebaseProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (!credential) {
        toast.error('credential_오류: 구글 로그인에 실패했습니다.');
        throw new Error('credential is null');
      }

      const token = credential.accessToken;
      const idToken = credential.idToken;
      setCookie(ON_STEP_TOKEN_NAME, { token, idToken });
      navigate(`${ROUTER_PATH.PRIVATE.PARENT.APP}/${ROUTER_PATH.PRIVATE.CHILD.TODAY}`);
    } catch (error) {
      toast.error('구글 로그인에 실패했습니다.');

      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };
  return { signInWithGoogle };
};
