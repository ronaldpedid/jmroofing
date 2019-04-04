import React, { Component } from 'react';
import { Lander, LanderFooter, AboutLander } from '../../components/landing/Lander';
import { BoxRow, BoxTestimonials, BoxRowReverse } from '../../components/boxes/Box';

export class AboutView extends Component {

  render() {
    return (
      <div>
        <AboutLander />
      </div>
    )
  }
}
