function Sidebar() {
  return (
    <div className='w-[280px] fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto p-4 bg-white shadow-md z-20'>
      <div className='space-y-4'>
        <h2 className='text-2xl font-bold'>Happy Tuesday 👋</h2>
        <p className='text-sm text-gray-500'>30 Dec 2023, 10:03am</p>

        <button className='bg-orange-300 text-white rounded-full py-2 px-4 w-full font-semibold hover:bg-orange-400'>
          + New Habits
        </button>
        <button className='border rounded-full py-2 px-4 w-full font-medium'>
          Browse Popular Habits
        </button>

        <div className='text-center'>
          <h3 className='text-lg font-semibold mb-2'>December, 2023</h3>
          <div className='grid grid-cols-7 gap-2 text-sm text-gray-600'>
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  i === 29
                    ? "bg-orange-300 text-white font-bold"
                    : "bg-gray-100"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className='text-green-500 text-xs mt-2'>+3.2% from last month</p>
        </div>

        <div className='bg-orange-50 p-4 rounded-xl text-center'>
          <img
            src='https://em-content.zobj.net/thumbs/120/apple/354/technologist_1f9d1-200d-1f4bb.png'
            alt='Download Emoji'
            className='mx-auto h-10'
          />
          <p className='font-semibold mt-2'>Sync anywhere with Hebats App</p>
          <p className='text-xs text-gray-500 mb-2'>
            Download now, sync later!
          </p>
          <button className='bg-white rounded-full px-4 py-1 shadow text-sm font-medium'>
            Download App
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
