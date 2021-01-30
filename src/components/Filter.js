import React from 'react';
import { connect } from 'react-redux';
import contactsActions from './../redux/contacts/contactsActions';

function Filter({filterValue, filterInput}) {

  return (
    <label>
        Find contacts by name <br/>
        <input type="text" name="filter" value={filterValue} onChange={e => filterInput(e.target.value)} />
    </label>
  );
}

const mapStateToProps = state => ({
  filterValue: state.contacts.filter
});

const mapDispatchToProps = {
  filterInput: contactsActions.filterChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);