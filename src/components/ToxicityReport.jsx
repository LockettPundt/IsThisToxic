import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ToxicityReport = ({ report }) => {
  const [placeholder, setPlaceholder] = useState('hi');

  console.log(report);

  return (
    <div>
      {report ? <p>this is the report.</p> : <p>{placeholder}</p>}
    </div>
  );
};

export default ToxicityReport;
