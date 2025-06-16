import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/shadcn/dialog";
import { Button } from "../shadcn";
import { useProfile } from "@/hooks/auth";
import { useRef } from "react";
import { useImagePreview } from "@/hooks/auth/use-imge-preview";
import { useUploadProfileImage } from "@/hooks/auth/use-upload-profile-image";
import { DialogDescription } from "@radix-ui/react-dialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: Props) {
  const { profile } = useProfile();
  const inputRef = useRef<HTMLInputElement>(null);

  const { previewUrl, handleImageSelect } = useImagePreview();
  const { handleSave, isLoading } = useUploadProfileImage(onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-2.5">
        <DialogHeader>
          <DialogTitle className="mx-[35px] pb-2.5">
            <div className=" ">프로필</div>{" "}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mx-[35px] ">
            프로필 사진을 업로드하거나 변경할 수 있습니다.
          </DialogDescription>
        </DialogHeader>

        <div className="h-[340px] p-2.5 w-full flex flex-col items-center justify-center gap-2.5">
          <div className="flex flex-col gap-2.5">
            <div className="w-50 h-50 bg-white rounded-[20px] relative overflow-hidden">
              {previewUrl ? (
                <img className="w-full h-full object-cover rounded-[20px]" src={previewUrl} />
              ) : profile.photo ? (
                <img className="w-full h-full object-cover rounded-[20px]" src={profile.photo} />
              ) : null}

              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
              />
              <Button
                variant="mint"
                className="h-[50px] w-[50px] absolute bottom-2.5 right-2.5 text-black text-[18px] p-0"
                type="button"
                onClick={() => inputRef.current?.click()}
              >
                +
              </Button>
            </div>
            <div className="flex w-50 h-[50px] items-center justify-center text-sm text-white">
              {profile.email}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={onClose}
            className="h-[35px] bg-neutral-900 hover:bg-neutral-700 text-white cursor-pointer"
            type="button"
            disabled={isLoading}
          >
            취소
          </Button>

          <Button
            variant="mint"
            onClick={() => previewUrl && handleSave(previewUrl)}
            className="h-[35px] text-black"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin" />
            ) : (
              "저장"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
