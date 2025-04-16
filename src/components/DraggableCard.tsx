import React from "react";
import { motion } from "framer-motion";
import CardWidget from "./CardWidget";

interface DraggableCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onDragEnd?: (id: string, info: { point: { x: number; y: number } }) => void;
  initialPosition?: { x: number; y: number };
  className?: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  id,
  title,
  children,
  onDragEnd,
  initialPosition = { x: 0, y: 0 },
  className,
}) => {
  return (
    <motion.div
      layout
      drag
      dragMomentum={false}
      initial={{ x: initialPosition.x, y: initialPosition.y }}
      dragElastic={0}
      className='absolute'
      onDragEnd={(_, info) => onDragEnd && onDragEnd(id, info)}
      whileDrag={{
        zIndex: 50,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <CardWidget
        title={title}
        className={`cursor-grab active:cursor-grabbing ${className || ""}`}
      >
        {children}
      </CardWidget>
    </motion.div>
  );
};

export default DraggableCard;
