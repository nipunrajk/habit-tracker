import React from "react";
import DraggableCard from "../components/cards/DraggableCard";
import CardWrapper from "../components/cards/CardWrapper";
import WeatherCard from "../components/content/WeatherCard";
// import TodosContent from "../components/content/TodosContent";
// import SpotifyContent from "../components/content/SpotifyContent";
// import ShouldDoContent from "../components/content/ShouldDoContent";
// import RunningCompetitionCard from "../components/content/RunningCompetitionCard";

const DashboardLayout: React.FC = () => {
  return (
    <div className=" h-[calc(100vh-64px)] overflow-y-auto">
      {/* Four-column grid: fixed 3 columns + filler */}
      <div className="grid grid-cols-[300px_480px_300px_1fr] gap-6">
        {/* ─── Left Column ─── */}
        <div className="flex flex-col gap-6">
          <CardWrapper title="Weather">
            <DraggableCard id="weather" className="w-full h-[240px]">
              <WeatherCard
                icon="/icons/sunny.svg"
                temperature="21°C"
                description="Sunny"
                location="San Francisco"
                wind="10 km/h"
                humidity="68%"
              />
            </DraggableCard>
          </CardWrapper>

          <CardWrapper title="More Integrations">
            <DraggableCard id="integrations" className="w-full h-[140px]">
              <div className="h-full flex items-center justify-center bg-red-200 rounded-xl">
                <span className="font-medium">23+ apps</span>
              </div>
            </DraggableCard>
          </CardWrapper>
        </div>

        {/* ─── Middle Column ─── */}
        <div className="flex flex-col gap-6">
          <CardWrapper title="Today's Todos">
            <DraggableCard id="todos" className="w-full h-[240px]">
              {/* <TodosContent /> */}
            </DraggableCard>
          </CardWrapper>
        </div>

        {/* ─── Right Column ─── */}
        <div className="flex flex-col gap-6">
          <CardWrapper title="Spotify">
            <DraggableCard id="spotify" className="w-full h-[180px]">
              {/* <SpotifyContent /> */}
            </DraggableCard>
          </CardWrapper>

          <CardWrapper title="Should Do">
            <DraggableCard id="should-do" className="w-full h-[160px]">
              {/* <ShouldDoContent /> */}
            </DraggableCard>
          </CardWrapper>

          <CardWrapper title="Running Competition">
            <DraggableCard id="running" className="w-full h-[240px]">
              {/* <RunningCompetitionCard /> */}
            </DraggableCard>
          </CardWrapper>
        </div>

        {/* ─── Filler Column ─── */}
        <div />
      </div>
    </div>
  );
};

export default DashboardLayout;
