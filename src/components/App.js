import React, {
  Component
} from 'react';
import {
  v4 as uuidv4
} from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import style from './style.module.css'


export default class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  componentDidMount() {
    const prevContacts = localStorage.getItem('contacts');

    prevContacts && this.setState({
      contacts: JSON.parse(prevContacts)
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  getVisibleTasks = () => {
    const {
      contacts,
      filter
    } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value
    });
  }
  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({
          id
        }) => id !== contactId),
      };
    });
  };
  render() {
    const visibleContacts = this.getVisibleTasks();

    return ( <
        div >
        <
        h1 > Phonebook < /h1> <div className = {
        style.phonebook
      } > <
      ContactForm onAddContact = {
        this.addContact
      }
    contacts = {
      this.state.contacts
    }
    / > < /
    div > <
      h2 > Contacts < /h2> <
    Filter onHandleFilter = {
      this.handleFilter
    }
    /> <
    ContactList visibleContacts = {
      visibleContacts
    }
    onRemove = {
      this.removeContact
    }
    /> < /
    div >
  );
}
}