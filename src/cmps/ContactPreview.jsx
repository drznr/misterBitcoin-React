import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function ContactPreview(props) {
  return (
    <NavLink to={'/contact/' + props.contact._id}>
      <div className="contact-preview">
        <img src={`https://robohash.org/${props.contact._id}?set=set4`} alt="contact" className="contact-preview-avatar" />
        <span className="contact-preview-txt">
          <p>{props.contact.name}</p>
          <p className="contact-preview-txt-phone">{props.contact.phone}</p>
        </span>
        <FontAwesomeIcon icon="info-circle" className="contact-preview-icon" title="View Contact" />
      </div>
    </NavLink>
  );
}

export default ContactPreview;
