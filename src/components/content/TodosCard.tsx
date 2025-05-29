import React from "react";
import { motion } from "framer-motion";

const todos = [
  {
    id: 1,
    text: "Study",
    time: "10:00am",
    location: "K-Cafe",
    completed: false,
    emoji: "🧑‍🎓",
  },
  {
    id: 2,
    text: "Groceries",
    time: "02:00pm",
    location: "Hayday Market",
    completed: false,
    emoji: "🛒",
  },
  {
    id: 3,
    text: "Eat Healthy Food",
    time: "08:30am",
    location: "Home",
    completed: true,
    emoji: "🥦",
  },
  {
    id: 4,
    text: "Read a book",
    time: "08:00am",
    location: "Library",
    completed: true,
    emoji: "📕",
  },
  {
    id: 5,
    text: "Swimming for 45min",
    time: "06:00am",
    location: "Gym Pool",
    completed: true,
    emoji: "🏊‍♂️",
  },
];

const TodosContent: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border-2 border-dashed border-gray-200">
      <div className="space-y-2">
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
          >
            {/* Emoji/Icon */}
            <div className="w-10 h-10 flex items-center justify-center text-2xl bg-gray-50 rounded-xl border border-gray-200">
              {todo.emoji}
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div
                className={`font-semibold text-base truncate ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-900"
                }`}
              >
                {todo.text}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {todo.time}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {todo.location}
                </span>
              </div>
            </div>

            {/* Checkbox or Checkmark */}
            <div className="w-8 h-8 flex items-center justify-center">
              {todo.completed ? (
                <span className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              ) : (
                <span className="w-6 h-6 border-2 border-gray-300 rounded-lg bg-white flex items-center justify-center">
                  {/* Empty box */}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TodosContent;
