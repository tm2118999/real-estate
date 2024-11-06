import React from 'react';
import './App.css';
import LTVCalculator from './components/LTVCalculator';
import MortgageCalculator from './components/MortgageCalculator';
import CapRateCalculator from './components/CapRateCalculator';
import CashOnCashCalculator from './components/CashOnCashCalculator';
import GRMCalculator from './components/GRMCalculator';
import DSCRCalculator from './components/DSCRCalculator';

function App() {
  return (
    <div className="App">
      <h1>Real Estate Calculator App</h1>
      <LTVCalculator />
      <MortgageCalculator />
      <CapRateCalculator />
      <CashOnCashCalculator/>
      <GRMCalculator/>
      <DSCRCalculator/>
    </div>
  );
}

export default App;

