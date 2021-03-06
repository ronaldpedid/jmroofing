import React, { Component } from 'react';
import { AboutLander } from '../../components/landing/Lander';
import { BoxRowAbout1, BoxRowAbout2, BoxCallout } from '../../components/boxes/Box';

export class AboutView extends Component {

  render() {
    return (
      <section>
        <AboutLander />
        <BoxRowAbout1 />
        <BoxRowAbout2 />
        <BoxCallout />
      </section>
    )
  }
}
