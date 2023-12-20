import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
