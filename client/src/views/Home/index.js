import React, { Component } from 'react';
import styles from './home.scss';
import { Lander, LanderFooter } from '../../components/landing/Lander';
import { BoxRow, BoxTestimonials, BoxRowReverse } from '../../components/boxes/Box';

export class HomeView extends Component {

  render() {
    return (
      <div className={styles.homeWrapper}>
        <Lander />
        <LanderFooter />
        <BoxRow />
        <BoxTestimonials />
        <BoxRowReverse />
      </div>
    )
  }
}
