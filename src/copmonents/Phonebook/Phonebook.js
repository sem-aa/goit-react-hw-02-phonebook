import React from "react";

const Phonebook = ({ contacts, onDeleteContact }) => (
  <ul>
    Phonebook
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default Phonebook;
