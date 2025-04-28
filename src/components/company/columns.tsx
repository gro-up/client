import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  MoreHorizontal,
  Calendar,
  Link,
  Edit,
  Trash,
  Clipboard,
  ChevronUp,
  ChevronDown,
  Building,
  ExternalLink,
  Briefcase,
} from "lucide-react";

import { Button, Checkbox } from "@/components/shadcn";
import type { Company } from "@/utils/table";
import { cn } from "@/utils/shadcn";

const selectColumn: ColumnDef<Company> = {
  id: "select",
  header: ({ table }) => (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  ),
  enableSorting: false,
  enableHiding: false,
};

const companyColumn: ColumnDef<Company> = {
  accessorKey: "company",
  header: ({ column }) => {
    return (
      <Button
        className={cn(
          (column.getIsSorted() === "desc" || column.getIsSorted() === "asc") && "text-blue-500",
          "cursor-pointer",
        )}
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <Building className="w-3 h-3" />
        회사
        {column.getIsSorted() === "asc" ? (
          <ChevronUp className="ml-2 h-3 w-3" />
        ) : (
          <ChevronDown className="ml-2 h-3 w-3" />
        )}
      </Button>
    );
  },
};

const jobColumn: ColumnDef<Company> = {
  accessorKey: "job",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={cn(
          (column.getIsSorted() === "desc" || column.getIsSorted() === "asc") && "text-blue-500",
          "cursor-pointer",
        )}
      >
        <Briefcase className="w-3 h-3" />
        직무
        {column.getIsSorted() === "asc" ? (
          <ChevronUp className="ml-2 h-3 w-3" />
        ) : (
          <ChevronDown className="ml-2 h-3 w-3" />
        )}
      </Button>
    );
  },
};

const companyLinkColumn: ColumnDef<Company> = {
  accessorKey: "company_link",
  header: () => {
    return (
      <span className="flex items-center gap-2">
        <ExternalLink className="w-3 h-3" />
        링크
      </span>
    );
  },
};

const actionsColumn: ColumnDef<Company> = {
  id: "actions",
  cell: ({ row }) => {
    const payment = row.original;

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="flex flex-col bg-gap-2  bg-gray-50 rounded-md opacity-100 z-10 text-gray-500 text-sm"
        >
          <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 w-full h-full cursor-pointer p-3">
            <Calendar className="w-3 h-3" />
            일정 추가
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 w-full h-full cursor-pointer p-3">
            <Link className="w-3 h-3" />
            링크 추가
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 w-full h-full cursor-pointer p-3">
            <Edit className="w-3 h-3" />
            편집
          </DropdownMenuItem>

          <DropdownMenuSeparator className="border-[0.5px] border-gray-200" />
          <DropdownMenuItem
            className="flex items-center gap-2 hover:bg-gray-100 w-full h-full cursor-pointer p-3"
            onClick={() => navigator.clipboard.writeText(payment.company)}
          >
            <Clipboard className="w-3 h-3" />
            회사명 복사
          </DropdownMenuItem>
          <DropdownMenuSeparator className="border-[0.5px] border-gray-200" />

          <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 w-full h-full cursor-pointer p-3 text-red-500">
            <Trash className="w-3 h-3" />
            삭제
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const columns: ColumnDef<Company>[] = [
  selectColumn,
  companyColumn,
  jobColumn,
  companyLinkColumn,
  actionsColumn,
];
