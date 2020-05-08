/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const toxicity = require('@tensorflow-models/toxicity');

const Form = ({ setReport }) => {
  const [text, setText] = useState('');
  const [sensitivity, setSensitivity] = useState('');
  const [inputOnePlaceholder, setInputOnePlaceholder] = useState('Sensitivity Level 1 - 10');

  const getToxicity = async (e) => {
    e.preventDefault();
    if (sensitivity > 0 && sensitivity <= 10) {
      const threshold = await toxicity.load(sensitivity / 10);
      const toxicReport = await threshold.classify([text]);
      setReport(toxicReport);
      setText('');
      setSensitivity('');
      return setInputOnePlaceholder('Sensitivity Level 1 - 10');
    }
    setSensitivity('');
    return setInputOnePlaceholder('Please Enter a Number 1 - 10 ');
  };


  return (
    <form onSubmit={(e) => getToxicity(e)}>
      <input
        type="text"
        placeholder={inputOnePlaceholder}
        value={sensitivity}
        onChange={(e) => setSensitivity(e.target.value)}
      />
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
