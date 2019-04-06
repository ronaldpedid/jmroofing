import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../index.scss';

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ navIsOpen: false })
    document.getElementById('root').scrollIntoView();
  }
  render() {
    return (
      <nav className={styles.navBox}>
        <Link to="/">
          <h1 onClick={this.handleClick}>JM Roofing <span className={styles.thinText}>of NWA</span></h1>
        </Link>
        <ul>
          <Link to="/about"><li onClick={this.handleClick} className={styles.navChild}>About Us</li></Link>
          <Link to="/services"><li onClick={this.handleClick} className={styles.navChild}>Services</li></Link>
          <Link to="/estimate"><li onClick={this.handleClick} className={styles.navChild}>Estimate</li></Link>
        </ul>
      </nav>
    )
  }
}
