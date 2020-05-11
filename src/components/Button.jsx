import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled.button`

  width: 90px;
  border-radius: 5px;
  border: 4px solid pink;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    transition: 0.4s ease-in-out;
    background-color: pink;
    border: 4px solid black;
  }

`;

const Button = ({ type, children }) => (
  <StyledButton type={type}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  type: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
};

export default Button;
