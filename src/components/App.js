import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import contactOperations from './../redux/contacts/contactsOperations';
import contactSelectors from './../redux/contacts/contactsSelectors';

class App extends Component {

  componentDidMount(){
    this.props.onFetchContacts();
  }

  render (){
    return (
      <>
        {this.props.loading && <h1>Loading ...</h1>}
        <h2>Phone book</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList />
      </>
    );
  }
  
}

const mapStateToProps = state => ({
  loading: contactSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);