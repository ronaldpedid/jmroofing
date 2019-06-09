import React, { Component } from 'react';
import styles from '../../index.scss';


export class Footer extends Component {
  render() {
    return (
      <footer className={styles.contentBigBoxFooter}>
        <div className={styles.footerRow}>
          <a className={styles.hyperline} href="tel:479-366-6442">479-366-6442</a>
          <a className={styles.hyperline} href="mailto:jmroofing93@live.com">jmroofing93@live.com</a>
        </div>
        <div className={styles.infoRow}>
          <p>&copy; Copyright 2019</p> <p>Site Design by The Sage Mages</p> <p> Website owned by J&MRoofing Inc</p>
        </div>
      </footer>
    )
  }
}
