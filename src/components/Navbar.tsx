import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/icons/logoicon";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

import { Avatar } from "radix-ui";

const Navbar: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBack = () => {
    console.log("Go back");
  };

  const handleForward = () => {
    console.log("Go forward");
  };

  const handleToggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setTimeout(() => {
      inputRef.current?.focus(); // focus the input on open
    }, 100);
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
          <div className='relative flex items-center gap-2 ml-5'>
            <button
              onClick={handleToggleSearch}
              className='p-2 rounded-lg hover:bg-gray-100 transition'
            >
              <Search size={18} />
            </button>

            {isSearchOpen && (
              <input
                ref={inputRef}
                type='text'
                placeholder='Search...'
                className='transition-all w-48 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm'
              />
            )}
          </div>
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
