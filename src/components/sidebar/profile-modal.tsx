import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/shadcn/dialog";
import { Button } from "../shadcn";
import { useProfile } from "@/hooks/auth";
import { useState, useRef } from "react";
import { uploadImageToS3, uploadImage } from "@/api/me";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: Props) {
  const { profile } = useProfile();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  // 👉 base64 이미지를 S3에 업로드
  const uploadToS3Mutation = useMutation({
    mutationFn: uploadImageToS3,
  });

  // 👉 URL을 서버에 저장 (DB 반영)
  const updateProfileMutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] }); //
      onClose(); // 모달 닫기
    },
    onError: (err) => {
      console.error("프로필 저장 실패", err);
    },
  });

  // 👉 파일 선택 시 base64 미리보기 생성
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // 👉 저장 버튼 클릭 시: S3 업로드 → DB 저장
  const handleSave = async () => {
    if (!previewUrl) return;
    try {
      const uploadedImageUrl = await uploadToS3Mutation.mutateAsync(previewUrl);
      console.log(uploadedImageUrl);
      await updateProfileMutation.mutateAsync(uploadedImageUrl);
    } catch (err) {
      console.error("전체 실패", err);
    }
  };

  const isLoading = uploadToS3Mutation.isPending || updateProfileMutation.isPending;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-2.5">
        <DialogHeader>
          <DialogTitle className="mx-[35px] p-2.5">
            <div className="px-[5px] py-2.5">프로필</div>
          </DialogTitle>
        </DialogHeader>

        {/* 이미지 영역 */}
        <div className="h-[340px] p-2.5 w-full flex flex-col items-center gap-2.5">
          <div className="flex flex-col gap-2.5">
            <div className="w-50 h-50 bg-white rounded-[20px] relative overflow-hidden">
              {previewUrl ? (
                <img
                  className="w-full h-full object-cover rounded-[20px]"
                  src={previewUrl}
                  alt="미리보기"
                />
              ) : profile.photo ? (
                <img
                  className="w-full h-full object-cover rounded-[20px]"
                  src={profile.photo}
                  alt="기존 프로필"
                />
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

            <div className="flex w-50 h-[50px] items-center justify-center text-sm text-gray-600">
              {profile.email}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={onClose}
            size="lg"
            className="w-[100px] h-[35px] bg-neutral-900 hover:bg-neutral-700 text-white"
            type="button"
            disabled={isLoading}
          >
            취소
          </Button>

          <Button
            variant="mint"
            size="lg"
            onClick={handleSave}
            className="w-[100px] h-[35px] text-black"
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
