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
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center justify-between gap-4">
        <img
          src={icon}
          alt="weather-icon"
          className="w-20 h-20 rounded-full object-cover border border-gray-200"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{temperature}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Middle - Location */}
      <div className="mt-4 pt-4">
        <p className="text-md text-gray-700 font-medium">{location}</p>
      </div>

      {/* Bottom - Details */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex justify-between text-gray-800">
          <div className="flex-1 flex flex-col items-center">
            <span className="text-lg font-bold">{wind}</span>
            <span className="text-md font-medium mt-1">Wind</span>
          </div>
          <div className="border-l border-gray-200 mx-4"></div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-lg font-bold">{humidity}</span>
            <span className="text-md font-medium mt-1">Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
