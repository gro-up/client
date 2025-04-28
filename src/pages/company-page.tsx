import { Table } from "@/components/shadcn";
import {
  CompanyTableHeader,
  CompanyTableBody,
  CompanyTableFilter,
  CompanyTablePagination,
} from "@/components/company";
import { useCompanyTable } from "@/hooks/company/use-company-table";

export default function CompanyPage() {
  const { table, columns } = useCompanyTable();

  return (
    <main className="flex flex-col gap-4 w-full h-full max-h-[850px]   bg-white rounded-md p-4 relative"></main>
  );
}
