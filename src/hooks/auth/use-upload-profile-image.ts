import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadImageToS3, uploadImage } from "@/api/me";

export function useUploadProfileImage(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  const uploadToS3 = useMutation({ mutationFn: uploadImageToS3 });
  const updateProfile = useMutation({
    mutationFn: uploadImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      onSuccess?.();
    },
  });

  const isLoading = uploadToS3.isPending || updateProfile.isPending;

  const handleSave = async (base64: string) => {
    const imageUrl = await uploadToS3.mutateAsync(base64);
    await updateProfile.mutateAsync(imageUrl);
  };

  return { handleSave, isLoading };
}
