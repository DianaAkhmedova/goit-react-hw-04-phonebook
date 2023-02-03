import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import {
  PhonebookContainer,
  PhonebookTitle,
  ContactsTitle,
} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const newContact = { ...contact, id: nanoid() };
    const isContainsContact = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContainsContact)
      return alert(`${newContact.name} is already in contacts`);

    setContacts(prevContacts => {
      return [newContact, ...prevContacts];
    });
  };

  const handleChangeFilter = ({ currentTarget: { value } }) => setFilter(value);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = contactId =>
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );

  const filteredContacts = getFilteredContacts();

  return (
    <PhonebookContainer>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm addContact={addContact} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filterValue={filter} handleChangeFilter={handleChangeFilter} />
      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          removeContact={removeContact}
        />
      )}
    </PhonebookContainer>
  );
};

export default App;
