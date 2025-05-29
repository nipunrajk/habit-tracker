import React from "react";
import DraggableCard from "../components/cards/DraggableCard";
import CardWrapper from "../components/cards/CardWrapper";
import WeatherCard from "../components/content/WeatherCard";
import ShouldDoCard from "../components/cards/ShouldDoCard";
import DistanceTrackerCard from "../components/cards/DistanceTrackerCard";
import TodosContent from "../components/content/TodosCard";
// import TodosContent from "../components/content/TodosContent";
// import SpotifyContent from "../components/content/SpotifyContent";
// import ShouldDoContent from "../components/content/ShouldDoContent";

const DashboardLayout: React.FC = () => {
  return (
    <div className="h-[calc(100vh-64px)] overflow-y-auto">
      {/* Three-column grid with max-width constraint */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_1.6fr_1fr]">
        {/* ─── Left Column ─── */}
        <div className="flex flex-col">
          <CardWrapper title="Weather" className="w-full">
            <DraggableCard id="weather" className="w-full h-[240px]">
              <WeatherCard
                icon="src/assets/2.svg"
                temperature="21°C"
                description="Sunny"
                location="San Francisco"
                wind="10 km/h"
                humidity="68%"
              />
            </DraggableCard>
          </CardWrapper>

          <CardWrapper title="Should Do" className="w-full">
            <ShouldDoCard />
          </CardWrapper>

          <CardWrapper
            title="Distance Tracker"
            className="w-full"
            showHeader={false}
          >
            <DraggableCard id="distance-tracker" className="w-full h-[240px]">
              <div className="h-full">
                {/* Custom header without View Details */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Distance Tracker
                  </h3>
                </div>
                <DistanceTrackerCard />
              </div>
            </DraggableCard>
          </CardWrapper>
        </div>

        {/* ─── Middle Column ─── */}
        <div className="flex flex-col">
          <CardWrapper title="Today's Todos" className="w-full">
            <DraggableCard id="todos" className="w-full">
              <TodosContent />
            </DraggableCard>
          </CardWrapper>
        </div>

        {/* ─── Right Column ─── */}
        <div className="flex flex-col">
          <CardWrapper title="Spotify" className="w-full">
            <DraggableCard id="spotify" className="w-full h-[180px]">
              <div className="h-full flex items-center justify-center bg-gray-50 rounded-xl">
                <span className="text-gray-400">Spotify Content</span>
              </div>
            </DraggableCard>
          </CardWrapper>

          <CardWrapper title="More Integrations" className="w-full">
            <DraggableCard id="integrations" className="w-full h-[140px]">
              <div className="h-full flex items-center justify-center bg-red-200 rounded-xl">
                <span className="font-medium">23+ apps</span>
              </div>
            </DraggableCard>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
