import React from "react";

const WeatherContent: React.FC = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='bg-[#FCF1BD] rounded-xl shadow p-4 h-[240px] relative overflow-hidden'>
        <div className='w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md'>
          <img
            src='src/assets/weather/setone.svg'
            alt='Weather Icon'
            className='w-8 h-8'
          />
        </div>

        <div className='absolute top-4 right-4 text-4xl font-bold text-gray-800'>
          12°C
        </div>
        <div className='grid grid-cols-3 gap-4 mt-4 text-center text-gray-700'>
          <div>
            <div className='font-bold text-lg'>2-4 km/h</div>
            <div className='text-xs'>Wind</div>
          </div>
          <div>
            <div className='font-bold text-lg'>102m</div>
            <div className='text-xs'>Pressure</div>
          </div>
          <div>
            <div className='font-bold text-lg'>42%</div>
            <div className='text-xs'>Humidity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
