/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import ToxicityReport from './components/ToxicityReport';

const Title = styled.h1`
  text-align: center;
  width: 200px;
  margin: 3rem auto 0rem auto;
`;

function App() {
  const [report, setReport] = useState(null);
  return (
    <div className="App">
      <Title>Is This Toxic?</Title>
      <Form setReport={setReport} />
      <ToxicityReport report={report} />
    </div>
  );
}

export default App;
