import React from "react";
import { motion } from "framer-motion";
import CardWidget from "./CardWidget";

interface DraggableCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onDragEnd?: (id: string, info: { point: { x: number; y: number } }) => void;
  className?: string;
  style?: React.CSSProperties;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  id,
  title,
  children,
  onDragEnd,
  className,
  style,
}) => {
  return (
    <motion.div
      layout
      drag
      dragElastic={0.2}
      dragMomentum={false}
      onDragEnd={(_, info) => onDragEnd && onDragEnd(id, info)}
      whileDrag={{
        zIndex: 50,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className={`cursor-grab active:cursor-grabbing ${className}`}
      style={style}
    >
      <CardWidget title={title}>{children}</CardWidget>
    </motion.div>
  );
};

export default DraggableCard;
