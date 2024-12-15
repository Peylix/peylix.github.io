import { useEffect, useState } from 'react';
import { fallingStrings } from '../config/stringConfig';
import FallingString from './MatrixRain';

const BirthdayAnimation = () => {
  const characters = ['刘', '维', '轩', '生', '日', '快', '乐'];
  const colors = ['#ffa86e', '#23a5eb', '#10ea1b', '#FF69B4', '#FFD700', '#87CEEB', '#98FB98'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [stringPositions, setStringPositions] = useState<number[]>([]);

  useEffect(() => {
    // 为每个字符串生成随机位置
    const positions = fallingStrings.map(() => 
      Math.random() * 90 + 5 // 5-95之间的随机数，避免太靠边
    );
    setStringPositions(positions);

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % characters.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">


      {/* 动态背景层 */}
      <div className="absolute inset-0 bg-gradient-animated" />
      
      {/* 下落字符串层 */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {fallingStrings.map((config, index) => (
          <FallingString
            key={`${index}-${config.text}`}
            {...config}
            position={stringPositions[index] || 0}
          />
        ))}
      </div>

      {/* 内容层 */}
      <div className="relative w-full h-full flex items-center justify-center z-10 bg-black/30">
        <div className="flex flex-row gap-8 p-8">
          {characters.map((char, index) => (
            <div
              key={index}
              className="relative transform transition-all duration-500 ease-in-out"
              style={{
                transform: `scale(${index === activeIndex ? 1.2 : 1})`,
              }}
            >
              <div
                className="text-8xl md:text-9xl lg:text-[150px] font-bold cursor-pointer hover:scale-110 transition-transform"
                style={{
                  color: colors[index],
                  textShadow: `0 0 20px ${colors[index]}`,
                  animation: index === activeIndex ? 'bounce 1s infinite' : 'none',
                  WebkitTextStroke: '2px rgba(255,255,255,0.2)'
                }}
              >
                {char}
              </div>
              <div
                className="absolute top-0 left-0 w-full h-full animate-pulse"
                style={{
                  background: `radial-gradient(circle, ${colors[index]}33 0%, transparent 70%)`,
                  filter: 'blur(10px)',
                  zIndex: -1
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-gradient-animated {
          background: linear-gradient(
            330deg,
            #e73c7e,
            #23a6d5,
            #23d5ab,
            #bd93f9,
            #ff79c6,
            #50fa7b,
            #ffb86c,
            #ff5555
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default BirthdayAnimation;