import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { theme } from 'assets/styles/theme';
import { StyledButton } from 'components/atoms/Button/button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
