import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form';


describe('Form Component tests', () => {
  it('Renders the Form without crashing.', () => {
    shallow(<Form />);
  });
});
