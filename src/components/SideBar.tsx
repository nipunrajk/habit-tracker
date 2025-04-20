import { SIDEBAR_WIDTH } from "../constant";
  
function Sidebar() {
  return (
    <aside className={`w-[${SIDEBAR_WIDTH}px] fixed top-10 left-0 min-h-full overflow-y-auto p-5 bg-white z-30`}>
      <div className='space-y-6'>
        {/* Header */}
        <div>
          <h2 className='text-xl font-bold text-gray-900'>Happy Tuesday 👋</h2>
          <p className='text-sm text-gray-500 mt-1'>30 Dec 2023, 10:03am</p>
        </div>

        {/* Buttons */}
        <div className='space-y-2'>
          <button className='bg-orange-300 text-white w-full py-2 rounded-full font-semibold hover:bg-orange-400'>
            + New Habits
          </button>
          <button className='border border-gray-300 w-full py-2 rounded-full font-medium'>
            Browse Popular Habits
          </button>
        </div>

        {/* Calendar */}
        <div className='text-center'>
          <h3 className='text-base font-semibold mb-3'>December, 2023</h3>
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
          <p className='text-green-500 text-xs mt-3'>+3.2% from last month</p>
        </div>

        {/* CTA Box */}
        <div className='bg-orange-50 p-4 rounded-xl text-center'>
          <img
            src='https://em-content.zobj.net/thumbs/120/apple/354/technologist_1f9d1-200d-1f4bb.png'
            alt='Technologist Emoji'
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
    </aside>
  );
}

export default Sidebar;
