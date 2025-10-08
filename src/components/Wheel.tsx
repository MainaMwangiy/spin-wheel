import React, { useState, useRef } from 'react';
import { WheelProps } from '../types';
import { SPIN_DURATION, MIN_ROTATIONS } from '../constants';
import '../assets/Wheel.css';

const Wheel: React.FC<WheelProps> = ({ 
  segments, 
  targetSegment,
  onSpinStart,
  onSpinComplete 
}) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelInnerRef = useRef<HTMLDivElement>(null);
  const segmentAngle = 360 / segments.length;

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    onSpinStart();
    const targetAngle = targetSegment * segmentAngle;
    const minRotation = 360 * MIN_ROTATIONS;
    const finalRotation = minRotation + (360 - targetAngle) + (segmentAngle / 2);
    const startTime = Date.now();
    const startRotation = rotation;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / SPIN_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentRotation = startRotation + (finalRotation * eased);
      
      setRotation(currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const prize = segments[targetSegment];
        onSpinComplete({
          segmentId: prize.id,
          prize: prize.label
        });
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="wheel-container">
      <div className="wheel-pointer"></div>
      
      <div className="wheel">
        <div 
          ref={wheelInnerRef}
          className="wheel-inner"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
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
        <div 
          className="wheel-center"
          onClick={handleSpin}
          style={{ cursor: isSpinning ? 'not-allowed' : 'pointer' }}
        >
          <span className="wheel-center-text">SPIN</span>
        </div>
      </div>
      <div className="wheel-border"></div>
    </div>
  );
};

export default Wheel;