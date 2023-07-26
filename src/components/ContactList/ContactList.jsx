import React from 'react';
import clsx from 'clsx';
import './ContactList.css';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={clsx('contacts-list')}>
      {filteredContacts.map(contact => (
        <li className={clsx('contacts-list__item')} key={contact.id}>
          <i className="fas fa-user-alt"></i>
          <div>
            <FontAwesomeIcon icon={faUser} /> {contact.name}
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} /> {contact.number}
          </div>
          <button
            className={clsx('contacts-list__item-button')}
            onClick={() => deleteContact(contact.id)}
          >
            <FontAwesomeIcon icon={faUserAltSlash} />
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
