import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface TaskItem {
  id: string;
  icon: string;
  title: string;
  engagement: {
    emoji: string;
    count: string;
    text: string;
  };
}

interface ShouldDoCardProps {
  tasks?: TaskItem[];
  className?: string;
}

const defaultTasks: TaskItem[] = [
  {
    id: "1",
    icon: "💪",
    title: "We go jimmm!!",
    engagement: {
      emoji: "😍",
      count: "4.2k",
      text: "love this",
    },
  },
  {
    id: "2",
    icon: "⏰",
    title: "The 5am club",
    engagement: {
      emoji: "😍",
      count: "5.4k",
      text: "love this",
    },
  },
];

const ShouldDoCard: React.FC<ShouldDoCardProps> = ({
  tasks = defaultTasks,
  className = "",
}) => {
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [resetKeys, setResetKeys] = useState<{ [key: string]: number }>({});

  const handleDragEnd = (taskId: string) => {
    setDraggedTaskId(null);
    // Force remount to reset position
    setResetKeys((prev) => ({
      ...prev,
      [taskId]: (prev[taskId] || 0) + 1,
    }));
  };

  return (
    <div className={className}>
      {/* Task Items */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="relative">
            {/* Dotted placeholder shown when this item is being dragged */}
            {draggedTaskId === task.id && (
              <div
                className="absolute inset-0 bg-gray-100 border-2 border-dotted border-gray-400 rounded-lg pointer-events-none z-0"
                aria-hidden="true"
              />
            )}
            <motion.div
              key={`${task.id}-${resetKeys[task.id] || 0}`} // This will remount the component to reset position
              drag
              dragElastic={0.2}
              dragMomentum={false}
              whileDrag={{ scale: 1.02, zIndex: 10 }}
              onDragStart={() => setDraggedTaskId(task.id)}
              onDragEnd={() => handleDragEnd(task.id)}
              className="relative flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all cursor-grab active:cursor-grabbing group z-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{task.icon}</span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span>{task.engagement.emoji}</span>
                    <span>{task.engagement.count}</span>
                    <span>{task.engagement.text}</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShouldDoCard;
