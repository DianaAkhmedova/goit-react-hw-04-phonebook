import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import {
  PhonebookContainer,
  PhonebookTitle,
  ContactsTitle,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = contact => {
    const { contacts } = this.state;
    const newContact = { ...contact, id: nanoid() };

    const isContainsContact = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContainsContact)
      return alert(`${newContact.name} is already in contacts`);

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  handleChangeFilter = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  removeContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));

  render() {
    const { contacts, filter } = this.state;
    const { addContact, handleChangeFilter, removeContact } = this;
    const filteredContacts = this.getFilteredContacts();

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
  }
}

export default App;
