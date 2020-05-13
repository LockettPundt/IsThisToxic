/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Report = styled.section`
  width: 15%;
  margin: auto;
  display: flex;
  flex-direction: column;
  
  .reportItem {
    width: 100%;
    display: flex;
  }
  
  p {
    width: 50%;
    padding: 0 1rem;
  }
  
  .iconBox {
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
 
  svg {
    padding: 0 1rem;
    color: pink;
  }
  
`;

const ToxicityReport = ({ report }) => {
  const reportResults = report ? report.map((item) => (
    <div className="reportItem">
      <p>{item.label.split('_').map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`).join(' ').trim()}</p>
      <div className="iconBox">
        <FontAwesomeIcon icon={item.results[0].match ? faCheck : faTimesCircle} />
      </div>
    </div>
  ))
    : null;

  return (
    <Report>
      {report ? reportResults : null}
    </Report>
  );
};

ToxicityReport.propTypes = {
  report: PropTypes.arrayOf.isRequired,
};

export default ToxicityReport;
