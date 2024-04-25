"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountries } from "../lib/getCountries";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "https://static.thenounproject.com/png/5624-200.png",
  iconSize: [50, 50],
});
export default function Map({ locationValue }: { locationValue: string }) {
  const { getCountByValue } = useCountries();
  const latLong = getCountByValue(locationValue)?.latLong;
  return (
    <MapContainer
      scrollWheelZoom={false}
      className="h-[50vh] rounded-lg relative z-0"
      center={latLong ?? [52.505, -0.09]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLong ?? [52.505, -0.09]} icon={ICON} />
    </MapContainer>
  );
}
