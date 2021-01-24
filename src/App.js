import React from "react";
// import shortid from "shortid";
// import logo from "./logo.svg";
// import "./App.css";
import Form from "./copmonents/Form/Form";
import Phonebook from "./copmonents/Phonebook/Phonebook";

var ids = require("short-id");

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Sem", number: "0986566967" },
      { id: "id-2", name: "Tarkin", number: "0966040004" },
      { id: "id-3", name: "Jeka", number: "0979886763" },
    ],
    name: "",
    number: "",
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
    const contact = {};
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <Form onSubmit={this.formSubmitHandler} />
        <Phonebook contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
