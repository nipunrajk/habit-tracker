import Logo from "../assets/icons/logoicon";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

import { Avatar } from "radix-ui";

const Navbar: React.FC = () => {
  const handleBack = () => {
    console.log("Go back");
  };

  const handleForward = () => {
    console.log("Go forward");
  };

  return (
    <header className='w-full h-16 flex items-center justify-between px-6 bg-white shadow-sm'>
      {/* Logo + Name */}
      <div className='flex items-center gap-2'>
        <Logo width={28} height={28} />
        <button onClick={handleBack}>
          <ChevronLeft size={18} />
        </button>
        <button onClick={handleForward}>
          <ChevronRight size={18} />
        </button>
        {/* Current Page Indicator */}
        <div className='flex items-center justify-center gap-1 text-gray-600 px-3 py-1'>
          <img
            src='src/assets/icons/homeicon.svg'
            alt='Dashboard'
            className='w-4 h-4 mb-1'
          />

          <span className='text-sm font-medium'>Dashboard</span>
          <span className='text-gray-400'>/</span>
          <span className='text-sm text-gray-500'>Schedule</span>
          <button className='p-2 rounded-lg hover:bg-gray-100 ml-5'>
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className='flex items-center gap-5'>
        <Avatar.Root className='inline-flex size-[25px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle'>
          <Avatar.Image
            className='size-full rounded-[inherit] object-cover'
            src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
            alt='Pedro Duarte'
          />
          <Avatar.Fallback
            className='leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11'
            delayMs={600}
          >
            User
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </header>
  );
};

export default Navbar;
