export {}; // 전역 타입 파일에서는 꼭 필요합니다

export interface DaumPostcodeData {
  address: string;
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
  buildingName: string;
  addressType: string;
  apartment: string;
  userSelectedType: "R" | "J";
  [key: string]: string;
}

declare global {
  interface Window {
    daum?: {
      Postcode: new (options: { oncomplete: (data: DaumPostcodeData) => void }) => {
        open: () => void;
      };
    };
  }
}
