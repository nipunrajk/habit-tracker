import Logo from "../assets/icons/logoicon";
import { Bell, Search } from "lucide-react";
const navItems = [
  { label: "Dashboard", active: true },
  { label: "Activity", tag: "New" },
  { label: "Statistics" },
  { label: "Explore" },
  { label: "Devices" },
];

const Navbar: React.FC = () => {
  return (
    <header className='w-full h-16 flex items-center justify-between px-6 bg-white shadow-sm border-b'>
      {/* Logo + Name */}
      <div className='flex items-center gap-2'>
        <Logo width={28} height={28} />
        <span className='font-heading text-lg'>Routiner</span>
      </div>

      {/* Navigation */}
      <nav className='hidden md:flex gap-6 text-sm text-gray-600 items-center'>
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`relative px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer ${
              item.active ? "text-primary font-semibold bg-primary/10" : ""
            }`}
          >
            {item.label}
            {item.tag && (
              <span className='absolute top-[-6px] right-[-14px] bg-red-500 text-white text-[10px] px-1 rounded'>
                {item.tag}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* Actions */}
      <div className='flex items-center gap-4'>
        <button className='p-2 rounded-lg hover:bg-gray-100'>
          <Search size={18} />
        </button>
        <button className='p-2 rounded-lg hover:bg-gray-100'>
          <Bell size={18} />
        </button>
        <div className='flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full'>
          <img
            src='https://i.pravatar.cc/40'
            alt='User'
            className='h-6 w-6 rounded-full'
          />
          <span className='text-sm font-medium'>Nipun</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
