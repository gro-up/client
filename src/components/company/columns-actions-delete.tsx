import { Trash } from "lucide-react";
import { DropdownMenuItem } from "../shadcn";
import { useDeleteCompany } from "@/hooks/company/use-delete-company";

export const CompanyActionsDelete = ({ companyId }: { companyId: string }) => {
  const { handleDeleteCompany } = useDeleteCompany({ companyId });

  return (
    <DropdownMenuItem
      className="flex items-center gap-2 hover:bg-gray-100 w-full h-full cursor-pointer p-3 text-red-500"
      onClick={handleDeleteCompany}
    >
      <Trash className="w-3 h-3" />
      삭제
    </DropdownMenuItem>
  );
};
