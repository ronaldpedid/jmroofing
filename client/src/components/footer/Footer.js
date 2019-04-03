import React, { Component } from 'react';
import styles from '../../index.scss';


export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.contact}>
          <h3><a>479-555-4949</a></h3>
          <h2>info@jmroofing.com</h2>
        </div>
        <div className={styles.info}>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Copyright 2019</a>
        </div>
      </footer>
    )
  }
}
