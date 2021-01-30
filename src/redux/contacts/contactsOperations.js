import contactActions from './contactsActions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => dispatch => {
  dispatch(contactActions.addContactRequest());

  axios.post('/contacts', {name, number})
  .then(response => dispatch(contactActions.addContactSuccess(response.data)))
  .catch(error => dispatch(contactActions.addContactError(error)));

}

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  axios.get('/contacts')
  .then(response => dispatch(contactActions.fetchContactsSuccess(response.data)))
  .catch(error => dispatch(contactActions.fetchContactsError(error)));
}

const removeContact = id => dispatch => {
  dispatch(contactActions.removeContactsRequest());

  axios.delete(`/contacts/${id}`)
  .then(response => dispatch(contactActions.removeContactsSuccess(id)))
  .catch(error => dispatch(contactActions.removeContactsError(error)));
}

const obj = {
  addContact, 
  fetchContacts,
  removeContact,
};

export default obj;
