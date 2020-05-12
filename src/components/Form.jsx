/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Donut } from 'react-dial-knob';
import Button from './Button';

const StyledForm = styled.form`
  width: 40%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  input {
    margin: 1rem;
    border: none;
    border-bottom: black 1px solid;
    
  }
  
  input:focus {
    outline: none;
  }
  > div {
    display: inherit;
    flex-direction: column;
    align-items: center;
  }
  
`;

const toxicity = require('@tensorflow-models/toxicity');

const Form = ({ setReport }) => {
  const [text, setText] = useState('');
  const [sensitivity, setSensitivity] = useState('');

  const getToxicity = async (e) => {
    e.preventDefault();
    const threshold = await toxicity.load(sensitivity / 100);
    const toxicReport = await threshold.classify([text]);
    setReport(toxicReport);
    setText('');
    setSensitivity('');
  };


  return (
    <StyledForm onSubmit={(e) => getToxicity(e)}>
      <Donut
        diameter={100}
        min={1}
        max={100}
        step={1}
        value={sensitivity}
        theme={{
          donutColor: 'pink',
        }}
        onValueChange={setSensitivity}
      >
        <label>
          Sensitivity Threshold
        </label>
      </Donut>
      <input
        type="text"
        placeholder="Type or Paste text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">GO!</Button>
    </StyledForm>
  );
};

Form.propTypes = {
  setReport: PropTypes.func.isRequired,
};

export default Form;
