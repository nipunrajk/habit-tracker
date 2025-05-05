import React from "react";

interface WeatherCardProps {
  icon: string;
  temperature: string;
  location: string;
  description: string;
  wind: string;
  humidity: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  icon,
  temperature,
  location,
  description,
  wind,
  humidity,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-[280px] flex flex-col justify-between">
      {/* Top - Icon + Temp */}
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt="weather-icon"
          className="w-14 h-14 rounded-full object-cover border border-gray-200"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{temperature}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Middle - Location */}
      <div className="mt-4">
        <p className="text-md text-gray-700 font-medium">{location}</p>
      </div>

      {/* Bottom - Details */}
      <div className="mt-3 flex justify-between text-sm text-gray-600">
        <div className="flex flex-col items-center">
          <span className="font-semibold">{wind}</span>
          <span className="text-xs">Wind</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">{humidity}</span>
          <span className="text-xs">Humidity</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
