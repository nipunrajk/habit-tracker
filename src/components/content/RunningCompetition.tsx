import React from "react";

const RunningCompetition: React.FC = () => {
  return (
    <div className='bg-white rounded-xl shadow p-4'>
      <h3 className='font-semibold mb-2'>Running Competition</h3>
      <p className='text-xs text-gray-500 mb-2'>📅 31 Dec • 20 miles • 09:00</p>
      <div className='rounded overflow-hidden'>
        <img
          src='/map-placeholder.png'
          alt='Running Route'
          className='w-full h-40 object-cover'
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/300x160?text=Map+Preview";
          }}
        />
      </div>
    </div>
  );
};

export default RunningCompetition;
