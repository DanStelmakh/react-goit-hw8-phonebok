import React from 'react';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterTitle } from 'components/Filter/Filter.styled';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label>
      <FilterTitle>Find contacts by name:</FilterTitle>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={onChange}
      ></Input>
    </label>
  );
};
