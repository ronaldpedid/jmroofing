import React, { Component } from 'react';
import axios from 'axios';
import styles from '../../index.scss';

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
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroupRow}>

            <div className={styles.formGroupCol}>
              <label>*Name</label>
              <input className={styles.inputField} name='firstName' type='text' onChange={handleChange} value={firstName} />
              <input className={styles.inputField} name='lastName' type='text' onChange={handleChange} value={lastName} />
            </div>




            <div className={styles.formGroupCol}>
              <label>*Address</label>
              <input className={styles.inputField} name='street' type='text' onChange={handleChange} value={street} />
              <input className={styles.inputField} name='city' type='text' onChange={handleChange} value={city} />
            </div>
          </div>
          <div className={styles.selectGroup}>
            <select name='projectType' onChange={handleChange} value={projectType || 'Option 1'}>
              <option className={styles.option}>Option 1</option>
              <option className={styles.option}>Option 2</option>
              <option className={styles.option}>Option 3</option>
            </select>
          </div>

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