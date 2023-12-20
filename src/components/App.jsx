import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  onAddClick = event => {
    event.preventDefault();
    const newContact = {
      id: Date.now(), // Це тимчасовий спосіб створення унікального ідентифікатора
      name: this.state.name,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '', // Очистити поле після додавання контакту
    }));
    console.log(this.state.name);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddClick={this.onAddClick}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
