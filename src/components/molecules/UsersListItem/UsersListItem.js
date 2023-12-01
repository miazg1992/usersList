import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/Button';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <Button />
      </p>
      <p>{attendance}</p>
    </StyledInfo>
    {/* <StyledButton isSecondary borderRadius={'10px'}>
      X
    </StyledButton> */}
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
