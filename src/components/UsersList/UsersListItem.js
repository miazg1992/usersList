import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => (
  <li key={name}>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
