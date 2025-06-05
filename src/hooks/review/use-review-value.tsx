import { useState } from "react";

export const useReviewValue = () => {
  const [reviewContentState, setReviewContent] = useState("");

  const handleReviewContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewContent(e.target.value);
  };

  return { reviewContentState, handleReviewContentChange };
};
