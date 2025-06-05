import { useGetReviewList } from "@/hooks/review/use-get-review-list";
import { ReviewListItem } from "./review-list-item";

export const ReviewList = () => {
  const { data: reviewList } = useGetReviewList();

  console.log(reviewList);

  return (
    <ul>
      <ReviewListItem />
      <ReviewListItem />
      <ReviewListItem />
    </ul>
  );
};
