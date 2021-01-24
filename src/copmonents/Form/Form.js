import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };

  changeInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.addContact}>
        <label>
          Name{" "}
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.changeInput}
          />
        </label>

        <label>
          Number{" "}
          <input
            name="number"
            type="text"
            value={number}
            onChange={this.changeInput}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
