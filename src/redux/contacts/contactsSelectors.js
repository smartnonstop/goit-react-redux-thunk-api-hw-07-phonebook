import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
});

const obj = {
  getFilter,
  getLoading,
  getVisibleContacts,
};

export default obj;