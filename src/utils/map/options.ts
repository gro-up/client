import { Coordinate } from "@/hooks/schedule";

export const mapOptions = (geocode: Coordinate) => ({
  center: new window.naver.maps.LatLng(geocode.y, geocode.x),
  zoom: 14,
  minZoom: 6,
  zoomControl: true,
  zoomControlOptions: {
    position: window.naver.maps.Position.TOP_RIGHT,
  },
});

export const markerOptions = (map: naver.maps.Map, geocode: Coordinate) => ({
  position: { lat: geocode.y, lng: geocode.x },
  map,
});
