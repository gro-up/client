import { Button } from '@/components/shadcn-ui';
import { useGoogleLoggedIn } from '@/hooks/auth';

const LandingPage = () => {
  const { signInWithGoogle } = useGoogleLoggedIn();

  return (
    <div className="flex flex-col items-center  h-screen">
      <div>
        <h2>On Step</h2>
      </div>

      <main className="flex justify-center items-center w-full h-full">
        <Button onClick={signInWithGoogle}>On Step 시작하기</Button>
      </main>
    </div>
  );
};

export default LandingPage;
