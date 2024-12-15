import React from 'react';
import type { StringConfig } from '../config/stringConfig';

interface FallingStringProps extends StringConfig {
  position: number;
}

const FallingString: React.FC<FallingStringProps> = ({
  text,
  color,
  speed,
  fontSize,
  delay,
  position
}) => {
  return (
    <div
      className="absolute top-0 whitespace-pre falling-text"
      style={{
        left: `${position}%`,
        color,
        fontSize,
        animation: `fallDown ${speed}s linear infinite`,
        animationDelay: `${delay}s`,
        WebkitTextOrientation: 'upright',
        writingMode: 'vertical-rl'
      }}
    >
      {text}
      <style>{`
        @keyframes fallDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100vh);
          }
        }
        
        .falling-text {
          opacity: 0.7;
          text-shadow: 0 0 8px ${color};
        }
      `}</style>
    </div>
  );
};

export default FallingString;