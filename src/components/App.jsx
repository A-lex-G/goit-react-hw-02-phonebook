import { Component } from "react";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchInput } from "./SearchInput/SearchInput";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  formDataGetter = (data) => {
    const { name, number } = data;
    const newContact = {
      name: name,
      number: number,
      contactId: nanoid(),
    };

    if ((this.state.contacts.map(contact => contact.name)).includes(name)) {
      window.alert(`${name} is already in contacts`)
      return
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleSearch = (filter) => {
    this.setState({ filter });
  };

  hendleDeleteContact = (idData) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.contactId !== idData)
      }
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Form onDataSubmit={this.formDataGetter} />
        <h2>Contacts</h2>
        <SearchInput onFilter={this.handleSearch} />
        <ContactsList contacts={filteredContacts} onDelete={this.hendleDeleteContact} />
      </>
    );
  }
}