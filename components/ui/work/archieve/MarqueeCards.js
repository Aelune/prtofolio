import React, { useState } from 'react';
import MysticalCard from '../mysticalCard'; // Adjust the path if needed

const MarqueeCards = ({ cards }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <div
      className="md:hidden overflow-hidden relative w-full pt-16 pb-32 z-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`flex w-max gap-6 animate-marquee whitespace-nowrap`}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="w-64 flex-shrink-0 animate-fade-up"
            style={{
              animationDelay: `${(index % cards.length) * 0.15}s`,
              animationDuration: '0.8s',
              animationFillMode: 'both',
            }}
          >
            <MysticalCard project={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCards;
