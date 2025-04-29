import { Input } from "../shadcn";

import type { CompanyProps } from "./company-table-header";

export const CompanyHeader = ({ table }: CompanyProps) => {
  return (
    <header className="flex justify-between  items-center  border-gray-200 p-2">
      <strong className="text-sm font-semibold">관심 기업</strong>
      <div className="flex items-center gap-2">
        <Input
          placeholder="회사명을 입력해주세요."
          value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("company")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
    </header>
  );
};
