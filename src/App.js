/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToxicityReport from './components/ToxicityReport';

function App() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    // console.log(report);
  }, [report]);


  return (
    <div className="App">
      <Form setReport={setReport} />
      <ToxicityReport report={report} />
    </div>
  );
}

export default App;
