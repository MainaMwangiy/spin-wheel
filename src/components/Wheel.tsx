import React from 'react';
import '../assets/Wheel.css';
import { WheelSegment } from '../types';

interface WheelProps {
  segments: WheelSegment[];
}

const Wheel: React.FC<WheelProps> = ({ segments }) => {
  const segmentAngle = 360 / segments.length;

  return (
    <div className="wheel-container">
      <div className="wheel">
        <div className="wheel-inner">
          {segments.map((segment, index) => {
            const angle = index * segmentAngle;
            return (
              <div
                key={segment.id}
                className="wheel-segment"
                style={{
                  transform: `rotate(${angle}deg)`,
                  backgroundColor: segment.color
                }}
              >
                <div className="segment-content">
                  {segment.label}
                </div>
              </div>
            );
          })}
        </div>
        <div className="wheel-center">
          <span className="wheel-center-text">SPIN</span>
        </div>
      </div>
    </div>
  );
};

export default Wheel;