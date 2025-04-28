import { Button } from "@/components/shadcn";
import { useNavigate } from "react-router";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col text-white text-5xl">
        <span>당신의 도약</span>
        <div>
          <span className="text-emerald-400 ">&nbsp;Gro와</span> <span>함께</span>
        </div>
        <Button
          onClick={() => navigate("/login")}
          variant="google"
          type="button"
          className="mt-3 h-12 text-2xl"
        >
          시작하기
        </Button>
      </div>
    </>
  );
}
