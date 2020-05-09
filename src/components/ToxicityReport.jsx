/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ToxicityReport = ({ report }) => {
  const [placeholder, setPlaceholder] = useState('Hi, enter some text to analyzed for toxicity.');

  console.log(report);

  return (
    <div>
      {report ? <p>this is the report.</p> : <p>{placeholder}</p>}
    </div>
  );
};

ToxicityReport.propTypes = {
  report: PropTypes.arrayOf.isRequired,
};

export default ToxicityReport;
