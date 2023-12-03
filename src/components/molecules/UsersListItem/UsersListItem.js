import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/Button';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles';

const showIndex = (index) => alert(index + 1);

const UsersListItem = ({
  index,
  userData: { name, average, attendance = '0%' },
}) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <Button onClick={() => showIndex(index)} />
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
