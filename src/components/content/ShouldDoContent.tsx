import React from "react";

const items = [
  { title: "We go jimm!!", emoji: "💪", count: "4.2k love this" },
  { title: "The 5am club", emoji: "⏰", count: "5.4k love this" },
];

const ShouldDoContent: React.FC = () => {
  return (
    <div className='space-y-3'>
      {items.map((item, idx) => (
        <div
          key={idx}
          className='bg-white rounded-xl px-4 py-3 shadow flex items-center justify-between'
        >
          <div className='flex items-center gap-3'>
            <span className='text-xl'>{item.emoji}</span>
            <div>
              <div className='font-medium'>{item.title}</div>
              <div className='text-xs text-gray-500'>{item.count}</div>
            </div>
          </div>
          <div className='text-sm text-gray-400'>›</div>
        </div>
      ))}
    </div>
  );
};

export default ShouldDoContent;
