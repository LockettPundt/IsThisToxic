import React from 'react';
import { shallow } from 'enzyme';
import ToxicityReport from '../components/ToxicityReport';


describe('The Toxicity Report Component.', () => {
  it('Render without crashing.', () => {
    const report = [{ label: 'identity_attack', results: [{ 0: { match: true } }] }];
    shallow(<ToxicityReport report={report} />);
  });
});
