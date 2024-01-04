import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles';

const UsersListItem = ({
  index,
  userData: { name, average, attendance = '0%' },
  deleteUsers,
}) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <DeleteButton onClick={() => deleteUsers(name)} />
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
