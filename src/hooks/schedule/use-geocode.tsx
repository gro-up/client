import { useState, useEffect } from "react";
import { toast } from "sonner";

import { setError } from "@/utils/error";

export interface Coordinate {
  x: number;
  y: number;
}

export const useGeocode = (query: string) => {
  const [geocode, setGeocode] = useState<Coordinate | null>(null);

  useEffect(() => {
    if (!query) return;
    window.naver.maps.Service.geocode({ query }, (status, response) => {
      if (status !== window.naver.maps.Service.Status.OK) {
        toast.error("네이버 지도 오류: 주소를 찾을 수 없습니다.");
      }

      try {
        const { addresses } = response.v2;
        const coordinates: Coordinate = {
          x: Number(addresses[0].x),
          y: Number(addresses[0].y),
        };
        setGeocode(coordinates);
      } catch (error) {
        toast.error("네이버 지도 오류: 주소를 찾을 수 없습니다.");
        setError(error);
      }
    });
  }, [query]);

  return geocode;
};
