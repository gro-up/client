import { Table } from "@/components/shadcn";
import {
  CompanyTableHeader,
  CompanyTableBody,
  CompanyHeader,
  CompanyTablePagination,
  CompanyForm,
} from "@/components/company";
import { useCompanyTable } from "@/hooks/company/use-company-table";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/api/base";
import { useCookies } from "@/hooks/auth";

export default function CompanyPage() {
  const { table, columns } = useCompanyTable();

  const { cookies } = useCookies();

  console.log(cookies["on-step-token"]);

  const { data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      try {
        const data = await fetch(`${BASE_URL}/api/companies`, {
          headers: {
            Authorization: `Bearer ${cookies["on-step-token"]}`,
          },
        });
        return data.json();
      } catch (error) {
        console.error(error);
      }
    },
  });

  console.log(companies);

  return (
    <main className="flex flex-col gap-4 w-full h-full max-h-[850px] rounded-md p-4 relative">
      <CompanyHeader table={table} />
      <Table>
        <CompanyTableHeader table={table} />
        <CompanyTableBody table={table} columns={columns} />
        <CompanyTablePagination table={table} />
      </Table>

      <CompanyForm />
    </main>
  );
}
