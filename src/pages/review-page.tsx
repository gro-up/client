import { ReviewList, ReviewForm } from "@/components/review";
import { NotDetailReview } from "@/components/review/not-detail-review";
import { ReviewDetail } from "@/components/review/review-detail";
import { useState } from "react";

export default function ReviewPage() {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const handleReviewClick = (scheduleId: number) => {
    setSelectedReview(scheduleId + 1);
  };

  return (
    <div className="flex gap-4 w-full h-full max-h-[850px] rounded-md p-4 relative ">
      <main className="w-6/12 relative">
        <header className="flex justify-center items-center mb-5">
          <h2 className="text-sm font-bold text-white">회고</h2>
        </header>

        <hr />

        <ReviewList onReviewClick={handleReviewClick} />

        <ReviewForm />
      </main>

      <div className="w-6/12">
        {!selectedReview && <NotDetailReview />}

        {selectedReview && <ReviewDetail selectedReview={selectedReview} />}
      </div>
    </div>
  );
}
