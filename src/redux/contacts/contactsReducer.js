import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const isContactExists = (state, name) => {
  const obj = state.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  return obj;
}

const addContact = (state, action) => {
  if (!isContactExists(state, action.payload.name)) {
    return [...state, action.payload];
  } else {
    alert(action.payload.contact.name+" is already in contacts");
    return state;
  }
}

const removeContact = (state, action) => {
  return state.filter(item => item.id !== action.payload)
}

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactsSuccess]: removeContact,
});

const filter = createReducer('', {
  [contactsActions.filterChange]: (state, action) => action.payload
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactsRequest]: () => true,
  [contactsActions.removeContactsSuccess]: () => false,
  [contactsActions.removeContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});