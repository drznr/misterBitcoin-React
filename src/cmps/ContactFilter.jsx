import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactFilter(props) {  
  return (
    <section className="contact-filter">
        <div className="container">
          <input type="text" placeholder="Search..." name="term" onChange={props.doFilter} />
        </div>
        <div className="contact-filter-btns">
          <button onClick={props.onSort}>
            <FontAwesomeIcon icon="sort-alpha-down" title="Sort" />
          </button>
          <button onClick={props.onShuffle}>
            <FontAwesomeIcon icon="random" title="Shuffle" />
          </button>
        </div>
    </section>
  );
}

export default ContactFilter;
