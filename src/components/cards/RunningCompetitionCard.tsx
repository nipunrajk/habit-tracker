import React from "react";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

interface RunningCompetitionCardProps {
  date?: string;
  tasksCompleted?: number;
  totalTasks?: number;
  locations?: number;
  className?: string;
}

const RunningCompetitionCard: React.FC<RunningCompetitionCardProps> = ({
  date = "Today",
  tasksCompleted = 5,
  totalTasks = 8,
  locations = 3,
  className = "",
}) => {
  return (
    <div className={`h-full flex flex-col ${className}`}>
      {/* Stats Row */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>
            {tasksCompleted}/{totalTasks} tasks
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{locations} locations</span>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative bg-gray-50 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {/* Simple map illustration */}
            <svg viewBox="0 0 300 200" className="w-full h-full">
              {/* Background */}
              <rect width="300" height="200" fill="#f9fafb" />

              {/* Grid pattern for map effect */}
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="0.5"
                />
              </pattern>
              <rect width="300" height="200" fill="url(#grid)" />

              {/* Roads/Paths */}
              <path
                d="M50 150 Q 150 50, 250 100"
                stroke="#60a5fa"
                strokeWidth="15"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M20 100 Q 100 120, 180 80"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M200 180 Q 220 140, 280 120"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
                opacity="0.8"
              />
            </svg>

            {/* Location Markers */}
            {/* Home/Start */}
            <div className="absolute bottom-12 left-12">
              <div className="relative group">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap text-gray-700">
                  Home
                </span>
              </div>
            </div>

            {/* Task Location 1 - Completed */}
            <div className="absolute top-16 left-32">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Task Location 2 - Pending */}
            <div className="absolute top-20 right-20">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center shadow">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Task Location 3 - Completed */}
            <div className="absolute bottom-16 right-32">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute top-4 right-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-orange-400">
                <span className="text-sm font-bold text-orange-600">
                  {Math.round((tasksCompleted / totalTasks) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningCompetitionCard;
