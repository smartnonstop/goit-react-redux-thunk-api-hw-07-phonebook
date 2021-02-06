import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from './../redux/contacts/contactsOperations';
import contactSelectors from './../redux/contacts/contactsSelectors';

function ContactList({contacts, deleteContact}) {

  return (
    <ul>
      {contacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number} &nbsp;
      <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button></li>)}
    </ul>
  );
}

const mapStateToProps = state => ({
  contacts: contactSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  deleteContact: contactsOperations.removeContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);