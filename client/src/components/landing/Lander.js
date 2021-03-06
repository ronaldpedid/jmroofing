import React, { Component } from 'react';
import styles from '../../index.scss';
import { ContentBox } from '../boxes/Box';
import { Link } from 'react-router-dom';

export class Lander extends Component {
  render() {
    return (
      <section className={styles.contentHero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeader}>Enjoy your scenery.</h1>
            <h4 className={styles.contentTag}>Whether it's preparing, repairing, or improving your roof. We are here to help.</h4>
            <div className={styles.buttonRow}>
              <Link to='/services'><p className={styles.heroButton} >Explore Services</p></Link>
              <Link to='/about'><p className={styles.heroButton}>About Us</p></Link>
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
        <ContentBox className={styles.blueBox}>
          <h2 className={styles.contentHeader}>Locals serving locals.</h2>
          <p className={styles.contentTag}>Juan and Martiza Guerrero has been servicing the NWA are for nearly 20 years! Starting back in 1999 Juan built his company from the ground up as a young man looking to support his family. Over the years he has built up J & M Roofing to the helpful service with a rich history of getting the job done.</p>
          <Link className={styles.infoButton} to="/services">
            <p>Explore Services </p></Link>
        </ContentBox>
        <ContentBox className={styles.aboutBox}></ContentBox>
      </div>
    )
  }
}