import React from "react";

interface CardWidgetProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

const CardWidget: React.FC<CardWidgetProps> = ({
  title,
  children,
  className,
  id,
  noPadding = false,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden h-full ${
        className || ""
      }`}
    >
      {/* Card Header - Always has consistent padding */}
      <div className='px-5 py-3 flex items-center justify-between'>
        <h3 className='text-lg font-medium text-gray-800'>{title}</h3>
        <span className='text-sm text-gray-500 hover:text-gray-700 cursor-pointer'>
          View Details
        </span>
      </div>

      {/* Card Content - No padding by default, controlled by children */}
      <div className='flex-1'>
        {children || (
          <div className='p-5 text-sm text-gray-600'>
            Widget content here...
          </div>
        )}
      </div>
    </div>
  );
};

export default CardWidget;
