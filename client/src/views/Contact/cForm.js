import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      projectType,
      projectDesc,
      commPref,
      budget,
      message,
      handleChange,
      handleSubmit
    } = this.props;
    return (
      <div className='formWrapper'>
        <form onSubmit={handleSubmit}>
          <input name='firstName' type='text' onChange={handleChange} value={firstName} />
          <input name='lastName' type='text' onChange={handleChange} value={lastName} />
          <input name='street' type='text' onChange={handleChange} value={street} />
          <input name='city' type='text' onChange={handleChange} value={city} />
          <select name='projectType' onChange={handleChange} value={projectType || 'Option 1'}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <input name='email' type='email' onChange={handleChange} value={email} />
          <input name='phone' type='number' onChange={handleChange} value={phone} />
          <textarea name='message' onChange={handleChange} value={message} rows='4' />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}


export class ContactView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      projectType: '',
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
      firstName,
      lastName,
      street,
      city,
      projectType,
      email,
      phone,
      message } = this.state;
    const form = await axios.post('/api/contact/send', {
      firstName,
      lastName,
      street,
      city,
      projectType,
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
      firstName,
      lastName,
      street,
      city,
      projectType,
      email,
      phone,
      message
    } = this.state;
    return (
      <div>
        <ContactForm
          firstName={firstName}
          lastName={lastName}
          street={street}
          city={city}
          projectType={projectType}
          email={email}
          phone={phone}
          message={message}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}