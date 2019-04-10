import React, { Component } from 'react';
import axios from 'axios';
import styles from '../../index.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleDate = this.handleDate.bind(this);

  }
  handleDate(e) {
    console.log(e);
    this.setState({ startDate: e });
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      projectType,
      budget,
      projectDesc,
      commPref,
      handleChange,
      handleSubmit,
      timeToReach,
    } = this.props;
    return (
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroupRow}>

            <div className={styles.formGroupCol}>
              <label>*Name</label>
              <input className={styles.inputField} name='firstName' type='text' placeholder='First Name' onChange={handleChange} value={firstName} />
              <input className={styles.inputField} name='lastName' type='text' placeholder='Last Name' onChange={handleChange} value={lastName} />
            </div>
            <div className={styles.formGroupCol}>
              <label>*Address</label>
              <input className={styles.inputField} name='street' type='text' placeholder='Street' onChange={handleChange} value={street} />
              <input className={styles.inputField} name='city' type='text' placeholder='City' onChange={handleChange} value={city} />
            </div>
          </div>

          <div className={styles.formGroupRow}>
            <div className={styles.selectGroup}>
              <label>Type of Project</label>
              <select name='projectType' onChange={handleChange} value={projectType || 'Option 1'}>
                <option className={styles.option}>Option 1</option>
                <option className={styles.option}>Option 2</option>
                <option className={styles.option}>Option 3</option>
              </select>
            </div>

            <div className={styles.selectGroup}>
              <label>Start Date</label>
              <DatePicker
                className={styles.inputField1}
                name='startDate'
                selected={this.state.startDate}
                onChange={this.handleDate}
                value={this.startDate}
              />
            </div>
          </div>
          <div className={styles.formGroupCol}>
            <label>Project Description</label>
            <textarea name='projectDesc' onChange={handleChange} value={projectDesc} rows='6' />
          </div>

          <div className={styles.formGroupCol}>
            <label>Estimated Budget</label>
            <input className={styles.inputField1} name='budget' type='number' placeholder="$" onChange={handleChange} value={budget} />
          </div>

          <div className={styles.formGroupRow}>


            <div className={styles.selectGroup}>
              <label>Communication Preference</label>
              <select className={styles.selector} name='commPref' onChange={handleChange} value={commPref}>
                <option className={styles.option}>Call</option>
                <option className={styles.option}>Text</option>
                <option className={styles.option}>Email</option>
              </select>
            </div>

            <div className={styles.selectGroup}>
              <label>Best Time to Reach You</label>
              <select className={styles.selector} name='timeToReach' onChange={handleChange} value={timeToReach || 'Morning'}>
                <option className={styles.option}>Morning</option>
                <option className={styles.option}>Afternoon</option>
                <option className={styles.option}>Evening</option>
              </select>
            </div>
          </div>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroupCol}>
              <label>Phone Number</label>
              <input className={styles.inputField1} name='phone' type='tel' onChange={handleChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} placeholder="555-555-5555" />
            </div>
            <div className={styles.formGroupCol}>
              <label>Email</label>
              <input className={styles.inputField1} name='email' type='email' onChange={handleChange} value={email} placeholder="me@example.com" />
            </div>
          </div>



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
      message: '',
      projectDesc: '',
      startDate: '',
      timeToReach: '',
      commPref: '',
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
      commPref,
      startDate,
      message } = this.state;
    const form = await axios.post('/api/contact/send', {
      firstName,
      lastName,
      street,
      city,
      projectType,
      startDate,
      email,
      phone,
      commPref,
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
      startDate,
      timeToReach,
      commPref,
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
          timeToReach={timeToReach}
          startDate={startDate}
          commPref={commPref}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDate={this.handleDate}
        />
      </div>
    )
  }
}