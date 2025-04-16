import React from "react";
import Masonry from "react-masonry-css";
import DraggableCard from "../components/DraggableCard";
import TodosContent from "../components/content/TodosContent";
import RunningCompetition from "../components/content/RunningCompetition";
import SpotifyContent from "../components/content/SpotifyContent";
import ShouldDoContent from "../components/content/ShouldDoContent";
import WeatherContent from "../components/WeatherContent";
import "../styles/masonry.css"; // 👈 Import the masonry styles

const cards = [
  {
    id: "weather",
    title: "Weather",
    content: <WeatherContent />,
  },
  {
    id: "todos",
    title: "Today's Todos",
    content: <TodosContent />,
  },
  {
    id: "running-competition",
    title: "Running Competition",
    content: <RunningCompetition />,
  },
  {
    id: "spotify",
    title: "Spotify",
    content: <SpotifyContent />,
  },
  {
    id: "should-do",
    title: "Should Do",
    content: <ShouldDoContent />,
  },
];

const DashboardLayout: React.FC = () => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <div className='px-6 py-6 h-[calc(100vh-64px)] overflow-y-auto bg-gray-100'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-column'
      >
        {cards.map((card) => (
          <DraggableCard
            key={card.id}
            id={card.id}
            title={card.title}
            className='bg-white rounded-xl shadow-md p-4'
          >
            {card.content}
          </DraggableCard>
        ))}
      </Masonry>
    </div>
  );
};

export default DashboardLayout;
