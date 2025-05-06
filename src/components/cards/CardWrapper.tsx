import React from "react";

interface CardWrapperProps {
  title?: string;
  showHeader?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  title,
  showHeader = true,
  children,
  className,
}) => {
  return (
    <div className={`bg-white rounded-xl shadow p-4 ${className}`}>
      {/* Card Header - Always has consistent padding */}
      {showHeader && (
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button className="text-sm text-gray-500 hover:underline">
            View Details
          </button>
        </div>
      )}

      {/* Card Content - No padding by default, controlled by children */}
      <div>{children}</div>
    </div>
  );
};

export default CardWrapper;
