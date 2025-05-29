import React, { useState } from "react";
import { motion } from "framer-motion";

interface DraggableCardProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  children,
  id,
  className = "",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className={`relative ${className}`} id={id}>
      {isDragging && (
        <div
          className="absolute bg-gray-100 inset-0 border-4 border-dotted border-gray-400 rounded-md pointer-events-none z-0"
          aria-hidden="true"
        />
      )}
      <motion.div
        key={resetKey} // This will remount the component to reset position
        drag
        dragElastic={0.2}
        dragMomentum={false}
        whileDrag={{ scale: 1.02, zIndex: 10 }}
        className="cursor-grab active:cursor-grabbing relative z-10"
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          setResetKey((k) => k + 1); // Remount to reset position
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default DraggableCard;
