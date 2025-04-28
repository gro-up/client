import { flexRender, type Table } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "../shadcn";
import type { Company } from "@/utils/table";

export interface CompanyProps {
  table: Table<Company>;
}

export const CompanyTableHeader = ({ table }: CompanyProps) => {
  return (
    <TableHeader className="bg-gray-50 rounded-md ">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className="border-none">
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};
