import { useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";

import type { Coordinate } from "./use-geocode";
import { mapOptions, NAVER_MAP_SCRIPT_SRC } from "@/utils/map";
import { setError } from "@/utils/error";

export const useLoadNaverMap = (geocode: Coordinate | null) => {
  const mapElement = useRef<HTMLDivElement>(null);

  const initializeMap = useCallback(() => {
    if (!mapElement.current || !window.naver || !geocode) return;

    try {
      const options = mapOptions(geocode);
      const map = new window.naver.maps.Map(mapElement.current, options);
      new window.naver.maps.Marker({ position: options.center, map });

      return () => {
        if (map) {
          map.destroy();
        }
      };
    } catch (error) {
      toast.error("네이버 지도 오류: 지도 초기화 오류");
      setError(error);
    }
  }, [geocode]);

  useEffect(() => {
    const loadNaverMap = () => {
      if (typeof window.naver === "undefined" || geocode) {
        const script = document.createElement("script");
        script.src = NAVER_MAP_SCRIPT_SRC;
        script.async = true;
        script.onload = initializeMap;
        document.head.appendChild(script);

        return () => {
          if (script.parentNode) {
            document.head.removeChild(script);
          }
        };
      } else {
        initializeMap();
      }
    };

    const cleanup = loadNaverMap();

    return () => {
      if (cleanup) cleanup();
    };
  }, [geocode, initializeMap]);

  return mapElement;
};
