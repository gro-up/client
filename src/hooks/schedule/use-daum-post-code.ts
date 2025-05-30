import { DaumPostcodeData } from "@/types";

export function useDaumPostcode(setAddress: (value: string) => void) {
  const handleAddressClick = () => {
    if (!window.daum?.Postcode) {
      alert("주소 검색 기능을 사용할 수 없습니다.");
      return;
    }

    const postcode = new window.daum.Postcode({
      oncomplete: (data: DaumPostcodeData) => {
        setAddress(data.address);
      },
    });

    postcode.open();
  };

  return { handleAddressClick };
}
