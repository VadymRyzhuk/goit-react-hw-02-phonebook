import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onAddClick}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Anna"
              name="name"
              onChange={this.props.handleChange}
              pattern="^[A-Za-z ]*$"
              required
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              placeholder="50102050"
              name="number"
              onChange={this.props.handleNumber}
              pattern="[0-9]*"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export { ContactForm };
