import React, { useState } from 'react';
import Wheel from './components/Wheel';
import ResultModal from './components/ResultsModal';
import { WheelSegment, SpinResult } from './types';
import { SEGMENTS, SPIN_OUTCOME } from './constants';
import './App.css';

const segments: WheelSegment[] = SEGMENTS;

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