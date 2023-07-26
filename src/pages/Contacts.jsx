import React, { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
// import { nanoid } from 'nanoid';
// import clsx from 'clsx';
import { StyledContactsWrapper } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/operations';
import { setFilter } from 'redux/filtersReducer';
import { getContacts, getFilter } from 'redux/selectors';
// import PropTypes from 'prop-types';
import { fetchContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFormSubmit = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('Contact already exists.');
      return;
    }

    const newContact = {
      // id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <StyledContactsWrapper>
      <ContactForm onSubmit={handleFormSubmit} />

      <h3>Saved contacts: {contacts.length}</h3>
      <Filter filter={filter} filterChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={handleDeleteContact}
      />
    </StyledContactsWrapper>
  );
};

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   filter: PropTypes.string,
//   handleFormSubmit: PropTypes.func,
//   handleDeleteContact: PropTypes.func,
//   handleFilterChange: PropTypes.func,
// };
