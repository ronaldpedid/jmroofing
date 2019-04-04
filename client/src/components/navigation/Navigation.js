import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../index.scss';

export class Navigation extends Component {
  render() {
    return (
      <nav className={styles.navBox}>
        <h1>JM Roofing <span className={styles.thinText}>of NWA</span></h1>
        <ul>
          <Link to="/about"><li>About Us</li></Link>
          <li>Services</li>
          <li>Estimate</li>
        </ul>
      </nav>
    )
  }
}
