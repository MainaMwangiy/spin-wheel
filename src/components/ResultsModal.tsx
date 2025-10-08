import React from 'react';
import '../assets/ResultsModal.css';

interface ResultModalProps {
  isOpen: boolean;
  prize: string;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, prize, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Congratulations, you won!</h2>
        <div className="prize-display">
          <span className="prize-value">{prize}</span>
        </div>
        <button className="spin-again-button" onClick={onClose}>
          SPIN AGAIN
        </button>
      </div>
    </div>
  );
};

export default ResultModal;