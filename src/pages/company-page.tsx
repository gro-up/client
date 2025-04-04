import { Table } from '@/components/shadcn';
import {
  CompanyTableHeader,
  CompanyTableBody,
  CompanyTableFilter,
  CompanyTablePagination,
} from '@/components/company';
import { useCompanyTable } from '@/hooks/company/use-company-table';

export default function CompanyPage() {
  const { table, columns } = useCompanyTable();

  return (
    <main className="flex flex-col gap-4 w-[900px] h-full max-h-[776px] bg-white rounded-md p-4 relative">
      <CompanyTableFilter table={table} />
      <Table>
        <CompanyTableHeader table={table} />
        <CompanyTableBody table={table} columns={columns} />
      </Table>
      <CompanyTablePagination table={table} />
    </main>
  );
}
