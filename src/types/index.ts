export interface WheelSegment {
  id: number;
  label: string;
  color: string;
}

export interface SpinResult {
  segmentId: number;
  prize: string;
}

export interface WheelProps {
  segments: WheelSegment[];
  targetSegment: number;
  onSpinStart: () => void;
  onSpinComplete: (result: SpinResult) => void;
}

export interface ResultModalProps {
  isOpen: boolean;
  prize: string;
  onClose: () => void;
}