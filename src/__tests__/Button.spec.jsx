import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('Button component', () => {
  it('Renders without crashing', () => {
    shallow(<Button type="submit">GO!</Button>);
  });
});
