import React, { Component } from 'react';
import { Lander, LanderFooter } from '../../components/landing/Lander';
import { BoxRow, BoxTestimonials, BoxRowReverse } from '../../components/boxes/Box';

export class HomeView extends Component {

  render() {
    return (
      <div>
        <Lander />
        <LanderFooter />
        <BoxRow />
        <BoxTestimonials />
        <BoxRowReverse />
      </div>
    )
  }
}
