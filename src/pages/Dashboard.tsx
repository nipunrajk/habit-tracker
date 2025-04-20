import React from "react";
import DraggableCard from "../components/DraggableCard";
import TodosContent from "../components/content/TodosContent";
import RunningCompetition from "../components/content/RunningCompetition";
import SpotifyContent from "../components/content/SpotifyContent";
import ShouldDoContent from "../components/content/ShouldDoContent";
import WeatherContent from "../components/WeatherContent";
// import AnalyticsPositive from "../components/content/AnalyticsPositive";
// import AnalyticsWrapped from "../components/content/AnalyticsWrapped";
// import FavoriteHabits from "../components/content/FavoriteHabits";

const DashboardLayout: React.FC = () => {
  return (
    <div className='px-4 py-6 max-w-screen-xl mx-auto h-[calc(100vh-64px)] overflow-y-auto'>
      <div className='grid grid-cols-[300px_460px_300px] gap-6'>
        {/* 🟡 Left Column */}
        <div className='flex flex-col gap-6'>
          <DraggableCard
            id='weather'
            title='Weather'
            className='h-[240px] bg-[#fff8d6]'
            noPadding
          >
            <WeatherContent />
          </DraggableCard>

          <DraggableCard id='should-do' title='Should Do' className='h-[180px]'>
            <ShouldDoContent />
          </DraggableCard>

          <DraggableCard
            id='running-competition'
            title='Running Competition'
            className='h-[240px]'
          >
            <RunningCompetition />
          </DraggableCard>
        </div>

        {/* 🔵 Middle Column */}
        <div className='flex flex-col gap-6'>
          <DraggableCard id='todos' title="Today's Todos">
            <TodosContent />
          </DraggableCard>
        </div>

        {/* 🟢 Right Column */}
        <div className='flex flex-col gap-6'>
          <DraggableCard id='spotify' title='Spotify' className='h-[180px]'>
            <SpotifyContent />
          </DraggableCard>

          <DraggableCard
            id='integrations'
            title='More Integrations'
            className='h-[140px] bg-red-200'
          >
            <div className='p-4 text-center text-lg font-medium'>23+ apps</div>
          </DraggableCard>

          {/* <DraggableCard
            id='analytics-positive'
            title='Analytics'
            className='h-[100px]'
          >
            <AnalyticsPositive />
          </DraggableCard> */}

          {/* <DraggableCard
            id='analytics-wrapped'
            title=''
            className='h-[130px] bg-black text-white'
          >
            <AnalyticsWrapped />
          </DraggableCard> */}

          {/* <DraggableCard
            id='favorite-habits'
            title='Favorite Habits'
            className='h-[240px]'
          >
            <FavoriteHabits />
          </DraggableCard> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
