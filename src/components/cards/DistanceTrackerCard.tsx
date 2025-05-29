import React, { useState, useEffect } from "react";
import { Bike, MapPin, TrendingUp } from "lucide-react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface DistanceTrackerCardProps {
  className?: string;
}

// Component to handle map clicks
function MapClickHandler({
  onMapClick,
}: {
  onMapClick: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

const DistanceTrackerCard: React.FC<DistanceTrackerCardProps> = ({
  className = "",
}) => {
  const [selectedPoints, setSelectedPoints] = useState<[number, number][]>([]);
  const [distance, setDistance] = useState<number>(0);

  // Default center - San Francisco
  const defaultCenter: [number, number] = [37.7749, -122.4194];

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleMapClick = (lat: number, lng: number) => {
    if (selectedPoints.length < 2) {
      const newPoints = [...selectedPoints, [lat, lng] as [number, number]];
      setSelectedPoints(newPoints);

      if (newPoints.length === 2) {
        const dist = calculateDistance(
          newPoints[0][0],
          newPoints[0][1],
          newPoints[1][0],
          newPoints[1][1]
        );
        setDistance(Math.round(dist * 10) / 10); // Round to 1 decimal
      }
    } else {
      // Reset and start new selection
      setSelectedPoints([[lat, lng]]);
      setDistance(0);
    }
  };

  const clearSelection = () => {
    setSelectedPoints([]);
    setDistance(0);
  };

  return (
    <div className={`h-full flex flex-col ${className}`}>
      {/* Stats Row */}
      <div className="flex items-center justify-between text-sm mb-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Bike className="w-4 h-4" />
            <span>Route Distance</span>
          </div>
          {distance > 0 && (
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>{distance} km</span>
            </div>
          )}
        </div>
        {selectedPoints.length > 0 && (
          <button
            onClick={clearSelection}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        )}
      </div>

      {/* Instructions */}
      <p className="text-xs text-gray-500 mb-2">
        Click two points on the map to measure distance
      </p>

      {/* Map Container */}
      <div
        className="relative rounded-lg overflow-hidden"
        style={{ height: 220 }}
      >
        <MapContainer
          center={defaultCenter}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapClickHandler onMapClick={handleMapClick} />

          {/* Markers for selected points */}
          {selectedPoints.map((point, index) => (
            <Marker key={index} position={point} />
          ))}

          {/* Line between points */}
          {selectedPoints.length === 2 && (
            <Polyline
              positions={selectedPoints}
              color="#3b82f6"
              weight={3}
              opacity={0.8}
              dashArray="10, 10"
            />
          )}
        </MapContainer>

        {/* Distance overlay */}
        {distance > 0 && (
          <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 shadow-md z-10">
            <span className="text-sm font-bold text-blue-600">
              {distance} km
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DistanceTrackerCard;
