import { PastSchedule } from "@/components/review";

export default function ReviewPage() {
  return (
    <div className="flex flex-col  gap-4 w-6/12  h-full max-h-[850px] rounded-md p-4 relative ">
      <header className="flex justify-center items-center">
        <h2 className="text-sm font-bold text-white">회고</h2>
      </header>

      <hr />

      <PastSchedule />
    </div>
  );
}
