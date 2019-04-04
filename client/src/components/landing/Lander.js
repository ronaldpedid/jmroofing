import React, { Component } from 'react';
import styles from '../../index.scss';
import { ContentBox } from '../boxes/Box';

export class Lander extends Component {
  render() {
    return (
      <section className={styles.contentHero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeader}>Enjoy your scenery.</h1>
            <h4 className={styles.contentTag}>Whether it's preparing, repairing, or improving your roof. We are here to help.</h4>
            <div className={styles.buttonRow}>
              <a className={styles.heroButton}>View Services</a>
              <a className={styles.heroButton}>About Us</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export class LanderFooter extends Component {
  render() {
    return (
      <div className={styles.contentFooter}>
        <p className={styles.assist}>Need advice or assistance? <a href="tel:1-479-366-6442" className={styles.hyperline}>479-366-6442</a></p>
      </div>
    )
  }
}

export class AboutLander extends Component {
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.contentBox}>
          <h2 className={styles.contentHeader}>Locals serving locals.</h2>
          <p className={styles.contentTag}>Small paragraph about what</p>
          <a className={styles.infoButton}>
            Explore Services </a>
        </ContentBox>
        <ContentBox className={styles.aboutBox}></ContentBox>
      </div>
    )
  }
}