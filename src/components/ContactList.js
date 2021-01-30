import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from './../redux/contacts/contactsOperations';

function ContactList({contacts, deleteContact}) {

  return (
    <ul>
      {contacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number} 
      <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button></li>)}
    </ul>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items.filter(contact => contact.name.toLowerCase().includes(state.contacts.filter)),
});

const mapDispatchToProps = {
  deleteContact: contactsOperations.removeContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);