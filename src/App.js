/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Form from './components/Form';
import ToxicityReport from './components/ToxicityReport';

function App() {
  return (
    <div className="App">
      <Form />
      <ToxicityReport />
    </div>
  );
}

export default App;
