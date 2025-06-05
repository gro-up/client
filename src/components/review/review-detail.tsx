import { useGetReviewDetail } from "@/hooks/review/use-get-review-detail";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "../shadcn";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useEditReview } from "@/hooks/review/use-edit-review";

export const ReviewDetail = ({ selectedReview }: { selectedReview: number }) => {
  const { data } = useGetReviewDetail(selectedReview);

  const [isEdit, setIsEdit] = useState(false);
  const [memo, setMemo] = useState("");

  const { mutate } = useEditReview(memo, String(selectedReview));

  useEffect(() => {
    if (data?.data?.memo) {
      setMemo(data.data.memo);
    }
  }, [data]);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleDelete = () => {
    setIsEdit(false);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <header className="mb-4 flex justify-between items-center">
        <h2>
          {data?.data?.position} - {data?.data?.companyName}
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleEdit}>
              <Edit /> 수정
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete}>
              <Trash /> 삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <hr className="mb-4" />

      <div className="w-full h-full relative">
        <textarea
          disabled={!isEdit}
          className="w-full h-full"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />

        {isEdit && (
          <div className="absolute bottom-0 right-0 flex gap-2">
            <Button variant="outline" onClick={handleEdit}>
              취소
            </Button>
            <Button variant="mint" className="text-black" onClick={() => mutate()}>
              저장
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
