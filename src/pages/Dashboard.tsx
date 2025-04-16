import React, { useState, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import DraggableCard from "../components/DraggableCard";
import TodosContent from "../components/TodosContent";
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
  // Define your dashboard cards
  const [cards] = useState<DashboardCard[]>([
    {
      id: "weather",
      title: "Weather",
      content: <WeatherContent />, // You'll need to create this component
      initialPosition: { x: 20, y: 20 },
      width: "320px",
      height: "auto",
    },
    {
      id: "todos",
      title: "Today's Todos",
      content: <TodosContent />, // You'll need to create this component
      initialPosition: { x: 360, y: 20 },
      width: "320px",
      height: "auto",
    },
    // Add more cards as needed
  ]);

  const [positions, setPositions] = useState<CardPosition[]>([]);

  // Load saved positions from localStorage
  useEffect(() => {
    const savedPositions = localStorage.getItem("card-positions");
    if (savedPositions) {
      setPositions(JSON.parse(savedPositions));
    }
  }, []);

  // Save positions when they change
  useEffect(() => {
    if (positions.length > 0) {
      localStorage.setItem("card-positions", JSON.stringify(positions));
    }
  }, [positions]);

  const handleDragEnd = (
    id: string,
    info: { point: { x: number; y: number } }
  ) => {
    const newPositions = [...positions];
    const index = newPositions.findIndex((p) => p.id === id);

    if (index !== -1) {
      newPositions[index] = { id, x: info.point.x, y: info.point.y };
    } else {
      newPositions.push({ id, x: info.point.x, y: info.point.y });
    }

    setPositions(newPositions);
  };

  const getPosition = (id: string) => {
    const savedPosition = positions.find((p) => p.id === id);
    const card = cards.find((c) => c.id === id);

    if (savedPosition) {
      return { x: savedPosition.x, y: savedPosition.y };
    }

    return card?.initialPosition || { x: 0, y: 0 };
  };

  return (
    <LayoutGroup>
      <div className='relative w-full h-[calc(100vh-64px)] overflow-auto p-4 bg-gray-100'>
        {cards.map((card) => (
          <DraggableCard
            key={card.id}
            id={card.id}
            title={card.title}
            initialPosition={getPosition(card.id)}
            onDragEnd={handleDragEnd}
            className={`${card.width ? `w-[${card.width}]` : "w-[320px]"} ${
              card.height ? `h-[${card.height}]` : ""
            }`}
          >
            {card.content}
          </DraggableCard>
        ))}
      </div>
    </LayoutGroup>
  );
};

export default DashboardLayout;
