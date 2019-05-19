import React, { Component } from 'react';
import styles from '../../index.scss';


export class Footer extends Component {
  render() {
    return (
      <footer className={styles.contentBigBoxFooter}>
        <div className={styles.footerRow}>
          <a className={styles.hyperline} href="tel:479-555-4949">479-555-4949</a>
          <a className={styles.hyperline} href="mailto:info@jmroofing.com">info@jmroofing.com</a>
        </div>
        <div className={styles.infoRow}>
          <p>&copy; Copyright 2019</p> <p>Site Design by The Sage Mages</p> <p> Website owned by J&MRoofing LLC</p>
        </div>
      </footer>
    )
  }
}
