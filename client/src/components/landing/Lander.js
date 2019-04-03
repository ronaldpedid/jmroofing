import React, { Component } from 'react';
import styles from './lander.scss';
import { Button } from '../button/Button';

export default class Lander extends Component {
  render() {
    return (
      <section className={styles.heroContainer}>
        <div className={styles.heroBackground}>
          <div className={styles.heroContent}>
            <h1>Enjoy your scenery.</h1>
            <h4>Weather it's preparing, repairing, or improving your roof. We are here to help.</h4>
            <Button className={styles.heroButton}>View Services</Button>
            <Button className={styles.heroButton}>About Us</Button>
          </div>
        </div>
        <div className={styles.heroFooter}>
          <p>Need advice or assistance? <span className={styles.hyperline}>479-366-6442</span></p>
        </div>
      </section>
    )
  }
}
