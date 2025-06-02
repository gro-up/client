import { useGeocode, useLoadNaverMap } from "@/hooks/schedule";

interface Props {
  address: string;
}
const ScheduleMapRender = ({ address }: Props) => {
  // 주소가 없으면 아무것도 렌더링하지 않음

  const geocode = useGeocode(address);
  const mapRef = useLoadNaverMap(geocode);
  if (!geocode) return <div className="text-xs text-gray-400">지도를 불러오는 중...</div>;
  return <div ref={mapRef} className="w-1/2 h-[240px] rounded border border-gray-700 mt-1" />;
};
export default ScheduleMapRender;
