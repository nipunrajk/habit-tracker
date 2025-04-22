import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const goToPreviousMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  const getDayClasses = (day: number) => {
    const isToday =
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();
    return `w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
      isToday ? "bg-orange-300 text-white" : "bg-gray-100 text-gray-700"
    }`;
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-3'>
        <h3 className='text-xl font-bold'>{`${currentMonth}, ${currentYear}`}</h3>
        <div>
          <button
            onClick={goToPreviousMonth}
            className='text-gray-500 hover:text-gray-800'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNextMonth}
            className='text-white rounded-full p-1 bg-orange-300 hover:bg-orange-400'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-7 gap-2 text-sm text-gray-600'>
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div key={i} className={getDayClasses(i + 1)}>
            {i + 1}
          </div>
        ))}
      </div>
      <p className='text-gray-500  text-xs mt-3'>
        <span className='text-green-500'>+3.2%</span> from last month
      </p>
    </div>
  );
};

export default Calendar;
