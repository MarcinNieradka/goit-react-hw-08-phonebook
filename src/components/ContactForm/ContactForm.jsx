import React from 'react';
import clsx from 'clsx';
import './ContactForm.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import { faBlenderPhone } from '@fortawesome/free-solid-svg-icons';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    onSubmit(name, number);
    e.target.reset();
  };

  // const iconPhone = <FontAwesomeIcon icon={faBlenderPhone} fontSize={25} />;

  return (
    <form className={clsx('main-form')} onSubmit={handleSubmit}>
      <label htmlFor="name" className={clsx('main-form__label')}>
        Name
        <input
          type="text"
          id="name"
          name="name"
          className={clsx('main-form__input')}
        />
      </label>

      <label htmlFor="number" className={clsx('main-form__label')}>
        Phone number
        <input
          type="tel"
          id="number"
          name="number"
          className={clsx('main-form__input')}
          title="Phone number"
          pattern="[0-9]+"
          required
        ></input>
      </label>
      <button className={clsx('main-form__button')} type="submit">
        <FontAwesomeIcon icon={faUserPlus} fontSize={20} />
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
