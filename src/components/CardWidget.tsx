import React from "react";

interface CardWidgetProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const CardWidget: React.FC<CardWidgetProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-4 min-h-[150px] ${
        className || ""
      }`}
    >
      <div className='flex items-center justify-between mb-3'>
        <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
        {/* Optional action icon/btn slot here in the future */}
      </div>
      <div className='text-sm text-gray-600'>
        {children || "Widget content here..."}
      </div>
    </div>
  );
};

export default CardWidget;
