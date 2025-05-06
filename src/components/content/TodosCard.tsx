import React from "react";
import { motion } from "framer-motion";

const TodosContent: React.FC = () => {
  const todos = [
    {
      id: 1,
      text: "Study",
      time: "10:00am",
      location: "K-Cafe",
      completed: false,
    },
    {
      id: 2,
      text: "Groceries",
      time: "02:00pm",
      location: "Hayday Market",
      completed: false,
    },
    {
      id: 3,
      text: "Eat Healthy Food",
      time: "08:30am",
      location: "Home",
      completed: true,
    },
    {
      id: 4,
      text: "Read a book",
      time: "08:00am",
      location: "Library",
      completed: true,
    },
    {
      id: 5,
      text: "Swimming for 45min",
      time: "06:00am",
      location: "Gym Pool",
      completed: true,
    },
  ];

  return (
    <div className='space-y-2'>
      {todos.map((todo) => (
        <motion.div
          key={todo.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='flex items-center gap-3 p-2 border-b last:border-0'
        >
          <div
            className={`w-6 h-6 rounded-full flex-shrink-0 ${
              todo.completed ? "bg-green-100" : "border border-gray-300"
            }`}
          >
            {todo.completed && (
              <svg
                className='w-6 h-6 text-green-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            )}
          </div>

          <div className='flex-1'>
            <div
              className={`font-medium ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </div>
            <div className='flex items-center text-xs text-gray-500 mt-1'>
              <svg
                className='w-3 h-3 mr-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              {todo.time} •
              <svg
                className='w-3 h-3 mx-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              {todo.location}
            </div>
          </div>

          <div className='w-6 h-6 flex-shrink-0'>
            {!todo.completed && (
              <input
                type='checkbox'
                className='w-5 h-5 rounded border-gray-300'
              />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TodosContent;
