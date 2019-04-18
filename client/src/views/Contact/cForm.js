import React, { Component } from 'react';
import axios from 'axios';
import styles from '../../index.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

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
      budget,
      projectDesc,
      commPref,
      startDate,
      handleChange,
      handleSubmit,
      handleDate,
      timeToReach,
      firstNameErr,
      lastNameErr,
      projectDescErr,
      commPrefErr,
      timeToReachErr,
      emailErr,
      phoneErr,
      cityErr,
      streetErr,

    } = this.props;
    return (
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroupRow}>

            <div className={styles.formGroupCol}>
              <label>*Name</label>
              <input className={firstNameErr ? styles.error : styles.inputField} name='firstName' type='text' placeholder='First Name' onChange={handleChange} value={firstName} />
              <input className={lastNameErr ? styles.error : styles.inputField} name='lastName' type='text' placeholder='Last Name' onChange={handleChange} value={lastName} />
            </div>
            <div className={styles.formGroupCol}>
              <label>*Address</label>
              <input className={streetErr ? styles.error : styles.inputField} name='street' type='text' placeholder='Street' onChange={handleChange} value={street} />
              <input className={cityErr ? styles.error : styles.inputField} name='city' type='text' placeholder='City' onChange={handleChange} value={city} />
            </div>

          </div>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroupCol}>
              <label>*Phone Number</label>
              <input className={phoneErr ? styles.error : styles.inputField1} name='phone' type='tel' onChange={handleChange} value={phone} placeholder="555-555-5555" />
            </div>
            <div className={styles.formGroupCol}>
              <label>*Email</label>
              <input className={emailErr ? styles.error : styles.inputField1} name='email' type='email' onChange={handleChange} value={email} placeholder="me@example.com" />

            </div>
          </div>

          <div className={styles.formGroupRow}>


            <div className={styles.formGroupCol}>
              <label>Estimated Budget</label>
              <input className={styles.inputField1} name='budget' type='number' placeholder="$" onChange={handleChange} value={budget} />
            </div>

          </div>
          <div className={styles.formGroupCol}>
            <label>Project Description</label>
            <textarea className={projectDescErr ? styles.error : ''} name='projectDesc' onChange={handleChange} value={projectDesc} rows='6' />
          </div>

          <div className={styles.selectGroup}>
            <label>Type of Project</label>
            <select name='projectType' onChange={handleChange} value={projectType}>
              <option className={styles.option}>Select One</option>
              <option className={styles.option}>Option 1</option>
              <option className={styles.option}>Option 2</option>
              <option className={styles.option}>Option 3</option>
            </select>
          </div>

          <div className={styles.selectGroup}>
            <label>Start Date</label>
            <DatePicker
              className={styles.datePicker}
              name='startDate'
              selected={this.props.startDate}
              onChange={handleDate}
              value={startDate}
            />
          </div>

          <div className={styles.formGroupRow}>


            <div className={styles.selectGroup}>
              <label>*Communication Preference</label>
              <select className={commPrefErr ? styles.error : styles.selector} name='commPref' onChange={handleChange} value={commPref}>
                <option className={styles.option}>Select One</option>
                <option className={styles.option}>Call</option>
                <option className={styles.option}>Text</option>
                <option className={styles.option}>Email</option>
              </select>
            </div>

            <div className={styles.selectGroup}>
              <label>*Best Time to Reach You</label>
              <select className={timeToReachErr ? styles.error : styles.selector} name='timeToReach' onChange={handleChange} value={timeToReach}>
                <option className={styles.option}>Select One</option>
                <option className={styles.option}>Morning</option>
                <option className={styles.option}>Afternoon</option>
                <option className={styles.option}>Evening</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroupRow}>
            <button className={styles.submitButton} type='submit'>Send</button>
          </div>
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
      projectDesc: '',
      startDate: new Date(),
      timeToReach: '',
      commPref: '',
      budget: '',
      firstNameErr: false,
      lastNameErr: false,
      projectDescErr: false,
      emailErr: false,
      phoneErr: false,
      cityErr: false,
      streetErr: false,
      commPrefErr: false,
      timeToReachErr: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);

  }


  validateForm() {
    const { firstName, lastName, email, phone, projectDesc, timeToReach, commPref, city, street } = this.state;
    const firstNameErr = firstName.length === 0;
    const lastNameErr = lastName.length === 0;
    const projectDescErr = projectDesc.length === 0;
    const timeToReachErr = timeToReach.length === 0;
    const emailErr = email.length === 0;
    const phoneErr = phone.length === 0 || phone.length < 7;
    const commPrefErr = commPref.length === 0;
    const cityErr = city.length === 0;
    const streetErr = street.length === 0;


    this.setState({ firstNameErr, lastNameErr, projectDescErr, timeToReachErr, emailErr, phoneErr, commPrefErr, cityErr, streetErr })
    return !(firstNameErr || //return if no errors
      lastNameErr ||
      emailErr ||
      phoneErr ||
      projectDescErr ||
      timeToReachErr ||
      commPrefErr ||
      cityErr ||
      streetErr);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDate(e) {
    console.log(e);
    this.setState({ startDate: e });
  }
  async submitForm() {
    const {
      firstName,
      lastName,
      street,
      city,
      projectType,
      projectDesc,
      startDate,
      email,
      phone,
      commPref,
      timeToReach,
      budget
    } = this.state;
    const form = await axios.post('/api/contact/send', {
      firstName,
      lastName,
      street,
      city,
      projectType,
      projectDesc,
      startDate,
      email,
      phone,
      commPref,
      timeToReach,
      budget
    }).catch((error) => {
      const response = error.response;
      console.log(response.data.errors);
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let redirect = window.location = '/';
      await this.submitForm();
      await redirect;
    }

  }
  render() {
    const {
      firstName,
      lastName,
      street,
      city,
      projectType,
      commPref,
      startDate,
      projectDesc,
      email,
      phone,
      budget,
      timeToReach,
      firstNameErr,
      lastNameErr,
      commPrefErr,
      timeToReachErr,
      projectDescErr,
      emailErr,
      phoneErr,
      cityErr,
      streetErr,
    } = this.state;
    return (
      <div>
        <ContactForm
          firstName={firstName}
          lastName={lastName}
          street={street}
          city={city}
          projectType={projectType}
          projectDesc={projectDesc}
          email={email}
          phone={phone}
          budget={budget}
          timeToReach={timeToReach}
          startDate={startDate}
          commPref={commPref}
          firstNameErr={firstNameErr}
          lastNameErr={lastNameErr}
          projectDescErr={projectDescErr}
          emailErr={emailErr}
          phoneErr={phoneErr}
          cityErr={cityErr}
          streetErr={streetErr}
          timeToReachErr={timeToReachErr}
          commPrefErr={commPrefErr}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDate={this.handleDate}
        />
      </div>
    )
  }
}