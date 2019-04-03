import React, { Component } from 'react';
import styles from '../../index.scss';
import { Button } from '../button/Button';

export class ContentBox extends Component {
  constructor(props) {
    super(props);
    const {
      className
    } = this.props;
  }
  render() {
    return (
      <div className={styles.contentBox}>
        {this.props.children}
      </div>
    )
  }
}

export class BoxRow extends Component {
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox>IMAGE COMING SOON</ContentBox>
        <ContentBox>
          <h5>GAUREETEE #1</h5>
          <h2>Experience Matters</h2>
          <p>Our craftmenship speaks for itself. So does our XX years of service to NWA.</p>
          <Button className={styles.transButton}>
            See More
          </Button>
        </ContentBox>
      </div>
    )
  }
}

export class BoxRowReverse extends Component {
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox>
          <h2>Thinking about upgrading your skylight?</h2>
          <p>We'll handle installing, you handle the cloud watching.</p>
          <Button className={styles.transButton}>
            Explore Services </Button>
        </ContentBox>
        <ContentBox>IMAGE COMING SOON</ContentBox>

      </div>
    )
  }
}

export class BoxTestimonials extends Component {
  render() {
    return (
      <div className={styles.contentRow}>
        <h3>Customer Review</h3>
        <p> " some testimonial "</p>
      </div>
    )
  }
}
