import React, { useState, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import DraggableCard from "../components/DraggableCard";
import TodosContent from "../components/content/TodosContent";
import RunningCompetition from "../components/content/RunningCompetition";
import SpotifyContent from "../components/content/SpotifyContent";
import ShouldDoContent from "../components/content/ShouldDoContent";
import WeatherContent from "../components/WeatherContent";

interface CardPosition {
  id: string;
  x: number;
  y: number;
}

interface DashboardCard {
  id: string;
  title: string;
  content: React.ReactNode;
  initialPosition?: { x: number; y: number };
  width?: string;
  height?: string;
}

const DashboardLayout: React.FC = () => {
  const cards: DashboardCard[] = [
    {
      id: "weather",
      title: "Weather",
      content: <WeatherContent />,
      width: "100%",
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

  return (
    <LayoutGroup>
      <div className='relative w-full h-[calc(100vh-64px)] overflow-auto px-4 py-6 bg-gray-100'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
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
        </div>
      </div>
    </LayoutGroup>
  );
};

export default DashboardLayout;