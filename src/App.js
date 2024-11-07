import React from 'react';
import './App.css';
import LTVCalculator from './components/LTVCalculator';
import MortgageCalculator from './components/MortgageCalculator';
import CapRateCalculator from './components/CapRateCalculator';
import CashOnCashCalculator from './components/CashOnCashCalculator';
import GRMCalculator from './components/GRMCalculator';
import DSCRCalculator from './components/DSCRCalculator';
import ROICalculator from './components/ROICalculator';
import OERCalculator from './components/OERCalculator';
import BERCalculator from './components/BERCalculator';
import PICalculator from './components/PICalculator';
import IRRCalculator from './components/IRRCalculator';
import NPVCalculator from './components/NPVCalculator';
import MIRRCalculator from './components/MIRRCalculator';
import EMCalculator from './components/EMCalculator';

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
      <ROICalculator/>
      <OERCalculator/>
      <BERCalculator/>
      <PICalculator/>
      <IRRCalculator/>
      <NPVCalculator/>
      <MIRRCalculator/>
      <EMCalculator/>
    </div>
  );
}

export default App;

