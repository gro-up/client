import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  Input,
} from "@/components/shadcn";
import { useCompanyFormValues, useEditCompany, useGetDetailCompany } from "@/hooks/company";
import { Edit } from "lucide-react";

import { COMPANY_FORM_VALUES_HANDLER_KEY } from "@/hooks/company";
import { DialogTrigger } from "@radix-ui/react-dialog";

export const CompanyEditForm = ({ companyId }: { companyId: string }) => {
  const { company, getDetailCompany } = useGetDetailCompany(companyId);

  const { companyFormValues, handleCompanyFormValuesChange, handleAddressClick } =
    useCompanyFormValues(company);

  const { isOpen, setIsOpen, handleEditCompany } = useEditCompany({
    companyFormValues,
    companyId,
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="flex items-center gap-2 hover:bg-gray-100 w-full h-full cursor-pointer p-3"
        onClick={() => {
          setIsOpen(true);
          getDetailCompany();
        }}
      >
        <Edit className="w-3 h-3" />
        <span>편집</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900">
        <DialogHeader>
          <DialogTitle>관심기업 추가</DialogTitle>
          <DialogDescription>관심기업의 채용사이트를 추가해주세요.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleEditCompany}>
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
            <div className="grid-cols-4 items-center gap-4 mb-5">
              <Input
                id="url"
                name="url"
                value={companyFormValues.url}
                onChange={handleCompanyFormValuesChange(COMPANY_FORM_VALUES_HANDLER_KEY.URL)}
                className="col-span-4"
                placeholder="링크를 입력해주세요."
              />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Input
                readOnly
                id="address"
                name="address"
                value={companyFormValues.address}
                onClick={handleAddressClick}
                className="col-span-4"
                placeholder="주소를 입력해주세요."
              />
              {companyFormValues.address && (
                <Input
                  id="addressDetail"
                  name="addressDetail"
                  value={companyFormValues.addressDetail}
                  onChange={handleCompanyFormValuesChange(
                    COMPANY_FORM_VALUES_HANDLER_KEY.ADDRESS_DETAIL,
                  )}
                  className="col-span-4"
                  placeholder="상세주소를 입력해주세요."
                />
              )}
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
