import { useGetReviewList } from "@/hooks/review/use-get-review-list";

export const NotDetailReview = () => {
  const { data } = useGetReviewList();

  const recentReview = data?.data?.retrospectList.at(-1);

  return (
    <section className="flex flex-col gap-4  w-full h-full justify-center items-center ">
      <header>
        <h3 className="text-2xl font-bold">최근 작성된 회고</h3>
      </header>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">
            {new Date(recentReview?.createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div>
            <span className="text-sm font-bold text-neutral-500 mr-3">
              {recentReview?.position}
            </span>

            <strong>{recentReview?.companyName}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
