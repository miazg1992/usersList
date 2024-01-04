import React, { useState } from 'react';

import { users as usersData } from 'data/users';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
// import { Wrapper } from '../UserList/UsersList.styles';

// Zabezpieczenie przed literówkami
// const formFields = {
//   name: 'NAME',
//   attendance: 'ATTENDANCE',
//   average: 'AVERAGE',
// };

const initialFormState = {
  firstName: '',
  name: '',
  attendance: '',
  average: '',
};

const Form = ({ formValues, handleAddUser, handleInputChange }) => {
  return (
    <>
      <form onSubmit={handleAddUser}>
        <h1> Add new student</h1>

        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        ></FormField>
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          onChange={handleInputChange}
          value={formValues.attendance}
        ></FormField>
        <FormField
          label="Average"
          id="average"
          name="average"
          onChange={handleInputChange}
          value={formValues.average}
        ></FormField>
        <Button type="submit"> Add </Button>
      </form>
    </>
  );
};

export default Form;
