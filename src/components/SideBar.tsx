import { SIDEBAR_WIDTH } from "../constant";
import Calendar from "./Calander";
import { useCurrentDateTime } from "../hooks/useCurrentDateTime";
function Sidebar() {
  const { weekday, day, month, year, time } = useCurrentDateTime();

  return (
    <aside
      className={`w-[${SIDEBAR_WIDTH}px] fixed top-10 left-0 min-h-full overflow-y-auto p-5 bg-white z-30`}
    >
      <div className='space-y-6'>
        {/* Header */}
        <div>
          <h2 className='text-3xl font-semibold text-gray-900'>
            Happy <br />
            <span className='inline-flex items-center gap-2'>
              {weekday}
              <img
                src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif'
                alt='👋'
                width='32'
                height='32'
              />
            </span>
          </h2>
          <p className='text-sm text-gray-500 mt-1'>
            {day} {month} {year}, {time}
          </p>
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

        <Calendar />

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
