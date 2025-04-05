import { Search } from 'lucide-react';
import { useGeocode, useGeocodeQuery, useLoadNaverMap } from '@/hooks/schedule';
import { Input, Button } from '../shadcn';

export const ScheduleDetailMap = () => {
  const { queryValue, searchQuery, handleIsSearch, handleQueryChange } = useGeocodeQuery();
  const geocode = useGeocode(searchQuery);
  const mapElement = useLoadNaverMap(geocode);

  return (
    <div className="w-full m-2">
      <div className="flex items-center gap-2 mb-5">
        <div className="flex relative">
          <Input
            id="location"
            type="text"
            value={queryValue}
            onChange={handleQueryChange}
            placeholder="주소를 입력해주세요."
          />
          <Button
            className="rounded-l-none absolute right-0"
            onClick={handleIsSearch}
            disabled={!queryValue}
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {searchQuery && (
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <div ref={mapElement} className="w-full h-full" id="map" />
        </div>
      )}
    </div>
  );
};
