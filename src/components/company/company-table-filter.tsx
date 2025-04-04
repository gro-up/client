import { Plus } from 'lucide-react';
import { Input, Button } from '../shadcn';

import type { CompanyProps } from './company-table-header';

export const CompanyTableFilter = ({ table }: CompanyProps) => {
  return (
    <header className="flex justify-between  items-center  border-gray-200 p-2">
      <strong className="text-sm font-semibold">관심 기업</strong>
      <div className="flex items-center gap-2">
        <Input
          placeholder="회사명을 입력해주세요."
          value={(table.getColumn('company')?.getFilterValue() as string) ?? ''}
          onChange={event => table.getColumn('company')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />

        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};
