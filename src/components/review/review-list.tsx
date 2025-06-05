// import { MoreHorizontal } from "lucide-react";

import { useGetReviewList } from "@/hooks/review/use-get-review-list";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

interface Review {
  companyId: number;
  companyName: string;
  createdAt: string;
  memo: string;
  position: string;
  scheduleId: string;
}

export const ReviewList = ({ onReviewClick }: { onReviewClick: (scheduleId: number) => void }) => {
  const { data } = useGetReviewList();

  return (
    <ul>
      {data?.data?.retrospectList.map((review: Review, index: number) => (
        <li onClick={() => onReviewClick(index)} key={review.scheduleId}>
          <div className="flex justify-between items-center h-16 border-b border-neutral-700 p-2">
            <div>
              <span className="text-sm font-semibold mr-3 text-neutral-500">{review.position}</span>
              <strong>{review.companyName}</strong>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Edit /> 수정
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash /> 삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </li>
      ))}
    </ul>
  );
};
