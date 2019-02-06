import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  render() {
    const {
      name,
      email,
      phone,
      message,
      handleChange,
      handleSubmit
    } = this.props;
    return (
      <div className='formWrapper'>
        <form onSubmit={handleSubmit}>
          <input name='name' type='text' onChange={handleChange} value={name} />
          <input name='email' type='email' onChange={handleChange} value={email} />
          <input name='phone' type='number' onChange={handleChange} value={phone} />
          <input name='message' type='text' onChange={handleChange} value={message} />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}


export class ContactRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async submitForm() {
    const {
      name,
      email,
      phone,
      message } = this.state;
    const form = await axios.post('/api/contact/send', {
      name,
      email,
      phone,
      message
    }).catch((error) => {
      const response = error.response;
      console.log(response.data.errors);
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    let redirect = window.location = '/';
    await this.submitForm();
    await redirect;
  }
  render() {
    const {
      name,
      email,
      phone,
      message
    } = this.state;
    return (
      <div>
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          message={message}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}