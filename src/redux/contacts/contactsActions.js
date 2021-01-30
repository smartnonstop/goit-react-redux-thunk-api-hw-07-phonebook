import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchReqest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const removeContactsRequest = createAction('contacts/removeReqest');
const removeContactsSuccess = createAction('contacts/removeSuccess');
const removeContactsError = createAction('contacts/removeError');


const filterChange = createAction('contacts/filterChange');

const obj = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  filterChange,
};

export default obj;
