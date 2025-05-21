import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  Input,
} from "@/components/shadcn";
import { useCompanyFormValues, useCreateCompany } from "@/hooks/company";
import { ListPlus } from "lucide-react";

import { COMPANY_FORM_VALUES_HANDLER_KEY } from "@/hooks/company";

export const CompanyForm = () => {
  const { companyFormValues, handleCompanyFormValuesChange } = useCompanyFormValues();

  const { handleCreateCompany } = useCreateCompany(companyFormValues);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="mint"
          type="button"
          size="lg"
          className="text-black absolute bottom-5 right-5"
        >
          <ListPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900">
        <DialogHeader>
          <DialogTitle>관심기업 추가</DialogTitle>
          <DialogDescription>관심기업의 채용사이트를 추가해주세요.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateCompany}>
          <div className="grid py-4">
            <div className="grid-cols-4 items-center gap-4 mb-5">
              <Input
                id="companyName"
                name="companyName"
                value={companyFormValues.companyName}
                onChange={handleCompanyFormValuesChange(
                  COMPANY_FORM_VALUES_HANDLER_KEY.COMPANY_NAME,
                )}
                className="col-span-4 border-b-0 rounded-br-none rounded-bl-none"
                placeholder="회사명을 입력해주세요"
              />
              <Input
                id="position"
                name="position"
                value={companyFormValues.position}
                onChange={handleCompanyFormValuesChange(COMPANY_FORM_VALUES_HANDLER_KEY.POSITION)}
                className="col-span-4 rounded-tr-none rounded-tl-none"
                placeholder="직무를 입력해주세요"
              />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Input
                id="url"
                name="url"
                value={companyFormValues.url}
                onChange={handleCompanyFormValuesChange(COMPANY_FORM_VALUES_HANDLER_KEY.URL)}
                className="col-span-4"
                placeholder="링크를 입력해주세요."
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button
              type="submit"
              variant="mint"
              className="text-black disabled:bg-neutral-500"
              disabled={
                !companyFormValues.companyName ||
                !companyFormValues.position ||
                !companyFormValues.url
              }
            >
              추가하기
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
