import { PastSchedule, PastScheduleList } from "@/components/review";

export default function ReviewPage() {
  return (
    <div className="flex gap-4 w-full h-full max-h-[850px] rounded-md p-4 relative ">
      <main className="w-6/12 ">
        <header className="flex justify-center items-center">
          <h2 className="text-sm font-bold text-white">회고</h2>
        </header>

        <hr />

        <PastSchedule />
        <PastScheduleList />
      </main>

      <section className="flex flex-col gap-4 w-6/12 justify-center items-center ">
        <header>
          <h3 className="text-2xl font-bold">최근 작성된 회고</h3>
        </header>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">2024년 4월 9일(수)</p>
            <div>
              <span className="text-sm font-bold text-neutral-500 mr-3">면접</span>

              <strong>A 컴퍼니 - 프론트엔드 개발자</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
