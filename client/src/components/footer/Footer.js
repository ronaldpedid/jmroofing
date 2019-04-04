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
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Copyright 2019</a>
        </div>
      </footer>
    )
  }
}
