import { type ColumnDef, flexRender } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "../shadcn";

import type { CompanyProps } from "./company-table-header";
import { Company, formatLink } from "@/utils/table";
import { Link } from "react-router";

interface CompanyTableBodyProps extends CompanyProps {
  columns: ColumnDef<Company, unknown>[];
}

export const CompanyTableBody = ({ table, columns }: CompanyTableBodyProps) => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <>
                {cell.column.id !== "company_link" && (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                )}
                {cell.column.id === "company_link" && (
                  <TableCell key={cell.id}>
                    <Link to={row.original.company_link} target="_blank">
                      {formatLink(row.original.company_link)}
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
