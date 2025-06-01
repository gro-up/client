import { Button } from "../shadcn";

import type { CompanyProps } from "./company-table-header";

export const CompanyTablePagination = ({ table }: CompanyProps) => {
  if (!table.getCanPreviousPage() && !table.getCanNextPage()) {
    return null;
  }

  return (
    <div className="relative w-full h-[65px]">
      <div className="flex items-center justify-end space-x-2 py-4 absolute bottom-0 right-10">
        {table.getCanPreviousPage() && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            이전
          </Button>
        )}
        {table.getCanNextPage() && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            다음
          </Button>
        )}
      </div>
    </div>
  );
};
