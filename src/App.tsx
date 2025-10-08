import React, { useState } from 'react';
import Wheel from './components/Wheel';
import ResultModal from './components/ResultsModal';
import { WheelSegment, SpinResult } from './types';
import { SPIN_OUTCOME } from './constants';
import './App.css';

const segments: WheelSegment[] = [
  { id: 0, label: '50 FS', color: '#C41E3A' },
  { id: 1, label: '100% FIRST DEPOSIT BONUS', color: '#1B5E20' },
  { id: 2, label: '€50', color: '#C41E3A' },
  { id: 3, label: 'NEXT SPIN', color: '#1B5E20' },
  { id: 4, label: 'SPIN AGAIN', color: '#C41E3A' },
  { id: 5, label: 'WELCOME BONUS', color: '#1B5E20' }
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentPrize, setCurrentPrize] = useState('');

  const handleSpinStart = () => {
    setShowModal(false);
  };

  const handleSpinComplete = (spinResult: SpinResult) => {
    setCurrentPrize(spinResult.prize);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">
          <span className="logo-bet">BET</span>
          <span className="logo-winner">WINNER</span>
        </div>
      </header>

      <main className="app-main">
        <h1 className="main-title">
          <span className="title-highlight">100% FIRST</span>
          <br />
          <span className="title-main">DEPOSIT BONUS</span>
        </h1>

        <Wheel 
          segments={segments}
          targetSegment={SPIN_OUTCOME}
          onSpinStart={handleSpinStart}
          onSpinComplete={handleSpinComplete}
        />
      </main>

      <ResultModal 
        isOpen={showModal}
        prize={currentPrize}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;