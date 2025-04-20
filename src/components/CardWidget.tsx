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
  noPadding = true,
}) => {
  return (
    <div
      className={`bg-white shadow-md ${!noPadding ? "p-4" : ""} min-h-[150px] ${
        className || ""
      }`}
    >
      <div className='flex items-center justify-between mb-3'>
        <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
        <h3 className='text-lg font-semibold text-gray-800'>View Details</h3>
        {/* Optional action icon/btn slot here in the future */}
      </div>
      <div className='text-sm text-gray-600'>
        {children || "Widget content here..."}
      </div>
    </div>
  );
};

export default CardWidget;
