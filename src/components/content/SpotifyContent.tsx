import React from "react";

const SpotifyContent: React.FC = () => {
  return (
    <div className='space-y-4'>
      {/* Spotify Card */}
      <div className='bg-white rounded-xl p-4 shadow flex flex-col items-start'>
        <div className='text-lg font-semibold mb-2'>
          Connect your Spotify account
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          Empower yourself with habit tracking while enjoying uninterrupted
          music
        </p>
        <button className='bg-black text-white px-4 py-2 rounded-full text-sm'>
          Link Account
        </button>
      </div>

      {/* More Integrations */}
      <div className='bg-rose-100 rounded-xl p-4 shadow'>
        <p className='text-sm text-gray-700 font-medium mb-1'>
          More Integrations
        </p>
        <p className='text-xs text-gray-600'>23+ apps</p>
      </div>
    </div>
  );
};

export default SpotifyContent;
