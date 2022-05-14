import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/button';
import { Wrapper, StyleAverage, StyledInfo } from './UserListItem.styles';

const UserListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <StyleAverage average={average}>{average}</StyleAverage>
    <StyledInfo>
      <p>
        {name}
        <Button />
      </p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
