import React from 'react';
import Wheel from './components/Wheel';
import './App.css';
import { WheelSegment } from './types';

const segments: WheelSegment[] = [
  { id: 0, label: '50 FS', color: '#C41E3A' },
  { id: 1, label: '100% BONUS', color: '#1B5E20' },
  { id: 2, label: '€50', color: '#C41E3A' },
  { id: 3, label: 'NEXT SPIN', color: '#1B5E20' },
  { id: 4, label: 'SPIN AGAIN', color: '#C41E3A' },
  { id: 5, label: 'WELCOME', color: '#1B5E20' }
];

function App() {
  return (
    <div className="App">
      <h1>Fortune Wheel</h1>
      <Wheel segments={segments} />
    </div>
  );
}

export default App;