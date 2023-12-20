import React from 'react';

const ContactForm = ({ onAddClick, handleChange }) => {
  return (
    <div>
      <form onSubmit={onAddClick}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Anna"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export { ContactForm };
