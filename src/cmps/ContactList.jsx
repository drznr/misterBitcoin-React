import React from 'react';

import ContactPreview from './ContactPreview';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactList(props) {
  return (
    <div className="contact-list container">
      <ul>
        {
          props.contacts.map(contact => <li key={contact._id}><ContactPreview contact={contact} /></li>)
        }
      </ul>
      <NavLink to="/contact/edit">
        <FontAwesomeIcon icon="user-plus" className="contact-list-link" title="Add Contact" />
      </NavLink>
    </div>
  );
}

export default ContactList;
