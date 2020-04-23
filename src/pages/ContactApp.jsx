import React from 'react';
import { connect } from 'react-redux';

import { loadContacts, sortContacts, shuffleContacts } from '../store/actions/ContactAction';

import ContactFilter from '../cmps/ContactFilter';
import ContactList from '../cmps/ContactList';

class ContactApp extends React.Component {

    doFilter = async (ev) => {
        const criteria = {
            [ev.target.name]: ev.target.value
        };
        this.props.loadContacts(criteria);
    }

    onSort = () => {
        this.props.sortContacts();
    }

    onShuffle = () => {
        this.props.shuffleContacts();
    }

    render() { 
        return (
          <section className="contact-app">
                <ContactFilter doFilter={this.doFilter} onSort={this.onSort} onShuffle={this.onShuffle} />
                <ContactList contacts={this.props.contacts} />
          </section>
        );
    }
}

const mapStateToProps = (state)=> { 
    return {
      contacts: state.contact.contacts
    }
}
const mapDispatchToProps = {
    loadContacts,
    sortContacts,
    shuffleContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactApp);
