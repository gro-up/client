import { GoogleButton } from '@/components/landing/google-button';

export default function LandingPage() {
  return (
    <main>
      <header className="flex flex-col justify-center items-center">
        <span className="text-gray-500">당신의 커리어, 성장을 향해</span>
        <h1 className="text-4xl font-bold">그로</h1>
      </header>

      <div>
        <GoogleButton />
      </div>
    </main>
  );
}
