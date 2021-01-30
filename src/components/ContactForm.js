import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from './../redux/contacts/contactsOperations';

class ContactForm extends Component {

  state = {
    name: '',
    number: ''
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  submitForm = e => {
    e.preventDefault();
    
    const { name, number } = this.state;
    this.props.submitForm(name, number);

    this.setState({
      name: '',
      number: ''
    });
    
  }

  render(){
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Name<br/>
          <input type="text" name="name" value={this.state.name} onChange={this.inputChange} />
        </label><br/><br/>
        <label>
          Phone<br/>
          <input type="number" name="number" value={this.state.number} onChange={this.inputChange} />
        </label><br/><br/>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}


const mapDispatchToProps = {
  submitForm: contactsOperations.addContact
};

export default connect(null, mapDispatchToProps)(ContactForm);