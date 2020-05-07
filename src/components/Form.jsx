import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const toxicity = require('@tensorflow-models/toxicity');

const Form = () => {
  const [text, setText] = useState('');
  const [toxicityReport, setToxicityReport] = useState([]);

  const getToxicity = async (e) => {
    e.preventDefault();
    const threshold = await toxicity.load(0.9);
    const model = await threshold.classify([text]);
    console.log(model);
    setToxicityReport(model);
    setText('');
  };


  return (
    <form onSubmit={(e) => getToxicity(e)}>
      <input
        type="text"
        placeholder="Type or Paste text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">GO</button>
    </form>
  );
};

export default Form;
