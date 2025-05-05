import React from "react";
import DraggableCard from "../components/DraggableCard";
// import TodosContent from "../components/content/TodosContent";
// import RunningCompetition from "../components/content/RunningCompetition";
// import SpotifyContent from "../components/content/SpotifyContent";
// import ShouldDoContent from "../components/content/ShouldDoContent";
import WeatherContent from "../components/WeatherContent";

// Card size categories
const SIZE = {
  SMALL: "w-[300px]",
  MEDIUM: "w-[480px]",
  FULL: "w-full",
};

const DashboardLayout: React.FC = () => {
  return (
    <div className='px-6 py-6 h-[calc(100vh-64px)] overflow-y-auto bg-gray-100'>
      <div className='flex gap-5 max-w-[1020px] mx-auto'>
        {/* Left Column */}
        <div className='flex flex-col gap-5'>
          {/* Weather Card */}
          <DraggableCard
            id='weather'
            title='Weather'
            className={`${SIZE.SMALL} h-[240px]`}
          >
            <WeatherContent />
          </DraggableCard>

          {/* More Integrations Card */}
          <DraggableCard
            id='integrations'
            title='More Integrations'
            className={`${SIZE.SMALL} h-[140px]`}
          >
            <div className='bg-red-200 p-5 h-full flex items-center justify-center'>
              <span className='text-center'>23+ apps</span>
            </div>
          </DraggableCard>
        </div>

        {/* Right Column */}
        <div className='flex flex-col gap-5'>
          {/* Today's Todos Card */}
          {/* <DraggableCard
            id='todos'
            title="Today's Todos"
            className={`${SIZE.MEDIUM}`}
          >
            <TodosContent />
          </DraggableCard> */}

          {/* Spotify Card */}
          {/* <DraggableCard
            id='spotify'
            title='Spotify'
            className={`${SIZE.MEDIUM} h-[180px]`}
          >
            <SpotifyContent />
          </DraggableCard> */}

          {/* Should Do Card */}
          {/* <DraggableCard
            id='should-do'
            title='Should Do'
            className={`${SIZE.MEDIUM} h-[160px]`}
          >
            <ShouldDoContent />
          </DraggableCard> */}

          {/* Running Competition Card */}
          {/* <DraggableCard
            id='running-competition'
            title='Running Competition'
            className={`${SIZE.MEDIUM} h-[280px]`}
          >
            <RunningCompetition />
          </DraggableCard> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
