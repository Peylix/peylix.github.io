import { useEffect, useState } from 'react';

const BirthdayAnimation = () => {
  const characters = ['生', '日', '快', '乐'];
  const colors = ['#FF69B4', '#FFD700', '#87CEEB', '#98FB98'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % characters.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex gap-4">
        {characters.map((char, index) => (
          <div
            key={index}
            className="text-6xl md:text-8xl font-bold transition-all duration-500 transform hover:scale-110"
            style={{
              color: colors[index],
              transform: index === activeIndex ? 'scale(1.2)' : 'scale(1)',
              textShadow: `0 0 10px ${colors[index]}`,
              animation: index === activeIndex ? 'bounce 1s infinite' : 'none',
            }}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayAnimation;