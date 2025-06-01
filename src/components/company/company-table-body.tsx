import { type ColumnDef, flexRender } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "../shadcn";

import type { CompanyProps } from "./company-table-header";
import { formatLink } from "@/utils/table";
import { Link } from "react-router";
import type { CompanyList } from "@/hooks/company/use-get-company-list";
interface CompanyTableBodyProps extends CompanyProps {
  columns: ColumnDef<CompanyList, unknown>[];
}

export const CompanyTableBody = ({ table, columns }: CompanyTableBodyProps) => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <>
                {cell.column.id !== "url" && (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                )}
                {cell.column.id === "url" && (
                  <TableCell key={cell.id}>
                    <Link to={row.original.url} target="_blank">
                      {formatLink(row.original.url)}
                    </Link>
                  </TableCell>
                )}
              </>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
            일정이 없습니다.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
