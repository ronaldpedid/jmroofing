import React, { Component } from 'react';
import styles from '../../index.scss';

export class ContentBox extends Component {
  constructor(props) {
    super(props);
    const {
      className
    } = this.props;
  }
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export class BoxRow extends Component {
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.bgCell1}></ContentBox>
        <ContentBox className={styles.blueBox}>
          <h3 className={styles.contentHat}>GAUREETEE #1</h3>
          <h2 className={styles.contentHeader}>Experience Matters</h2>
          <p className={styles.contentTag}>Our craftmenship speaks for itself. So does our XX years of service to NWA.</p>
          <a className={styles.infoButton}>
            See More
          </a>
        </ContentBox>
      </div>
    )
  }
}

export class BoxRowReverse extends Component {
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.greenBox}>
          <h2 className={styles.contentHeader}>Thinking about upgrading your skylight?</h2>
          <p className={styles.contentTag}>We'll handle installing, you handle the cloud watching.</p>
          <a className={styles.infoButton}>
            Explore Services </a>
        </ContentBox>
        <ContentBox className={styles.bgCell2}></ContentBox>

      </div>
    )
  }
}

export class BoxTestimonials extends Component {
  render() {
    return (
      <section className={styles.contentBigBoxTest}>

        <h3>Customer Review</h3>
        <p> " some testimonial "</p>

      </section>

    )
  }
}
