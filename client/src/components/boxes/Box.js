import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    document.getElementById('Guara').scrollIntoView();
  }
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.bgCell1}></ContentBox>
        <ContentBox className={styles.blueBox}>
          <h3 className={styles.contentHat}>GUARANTEE #1</h3>
          <h2 className={styles.contentHeader}>Experience Matters</h2>
          <p className={styles.contentTag}>Our craftmenship speaks for itself. So does our XX years of service to NWA.</p>
          <Link to="/about#Guara" onClick={this.handleClick}> <p className={styles.infoButton}>
            See More
          </p> </Link>
        </ContentBox>
      </div>
    )
  }
}

export class BoxRowReverse extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    document.getElementById('root').scrollIntoView();
  }
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.greenBox}>
          <h2 className={styles.contentHeader}>Thinking about upgrading your skylight?</h2>
          <p className={styles.contentTag}>We'll handle installing, you handle the cloud watching.</p>
          <Link onClick={this.handleClick} to="/services"><p className={styles.infoButton}>
            Explore Services </p></Link>
        </ContentBox>
        <ContentBox className={styles.bgCell2}></ContentBox>

      </div>
    )
  }
}

export class BoxTestimonials extends Component {
  render() {
    let quotes = [{
      quote: `I have used Juan with JM Roofing on multiple occasions from putting on new construction metal roof, wind damage
      shingle replacement as well as new addition roofing. Juan is professional, timely, conscientious and fair price.
      I would highly recommend Juan for any of your roofing needs.`,
      byWho: 'Randy Huffman'
    },
    {
      quote: 'We love our clients!',
      byWho: 'Guy Man2'
    },
    {
      quote: 'We love our clients!',
      byWho: 'Guy Man3'
    },
    {
      quote: 'We love our clients!',
      byWho: 'Guy Man4'
    },
    {
      quote: 'We love our clients!',
      byWho: 'Guy Man5'
    },
    {
      quote: 'We love our clients!',
      byWho: 'Guy Man6'
    }];
    let randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomNumber.quote])
    console.log(quotes[randomNumber.byWho])
    return (
      <section className={styles.contentBigBoxTest}>
        <h3 className={styles.quote}>"{quotes[randomNumber].quote}"</h3>
        <h3 className={styles.byWho}>- {quotes[randomNumber].byWho}</h3>
      </section>

    )
  }
}

export class BoxRowAbout1 extends Component {
  render() {
    return (
      <div id="Guara" className={styles.contentRow}>
        <ContentBox className={styles.whiteBox}>
          <h3 className={styles.contentHat}>GUARANTEE #1</h3>
          <h2 className={styles.contentHeader}>Experience Matters</h2>
          <p className={styles.contentTag}>
            Our craftmenship speaks for itself. So does our 20 years of service to NWA.
          </p>
        </ContentBox>
        <ContentBox className={styles.whiteBox}>
          <h3 className={styles.contentHat}>GUARANTEE #2</h3>
          <h2 className={styles.contentHeader}>Grade A Brands</h2>
          <p className={styles.contentTag}>Using top industry brands to ensure the best possible quality.</p>
        </ContentBox>
      </div>
    )
  }
}

export class BoxRowAbout2 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    document.getElementById('root').scrollIntoView();
  }
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.whiteBox}>
          <h3 className={styles.contentHat}>GUARANTEE #3</h3>
          <h2 className={styles.contentHeader}>No Sub-Contractors</h2>
          <p className={styles.contentTag}>Family owned and operated with a generation of experience.</p>
        </ContentBox>
        <ContentBox className={styles.whiteBox}>
          <h3 className={styles.contentHat}>GUARANTEE #4</h3>
          <h2 className={styles.contentHeader}>Efficient and Effortless</h2>
          <p className={styles.contentTag}>A painless process for you to achieve the roof you desire.</p>
        </ContentBox>
      </div>
    )
  }
}

export class BoxCallout extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    document.getElementById('root').scrollIntoView();
  }
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.contentBigBoxCallout}>
          <h1 className={styles.contentHeaderWhite}>Ready to start your project?</h1>
          <div className={styles.buttonRow}>
            <a href="tel:5551234567" className={styles.calloutButton}>Call Us 479-555-5555</a>
            <Link onClick={this.handleClick} to="/estimate"><p className={styles.calloutButton}>Free Estimate</p></Link>
          </div>
        </ContentBox>
      </div>
    )
  }
}

export class BoxCalloutService extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    document.getElementById('root').scrollIntoView();
  }
  render() {
    return (
      <div className={styles.contentRow}>
        <ContentBox className={styles.contentBigBoxCalloutService}>
          <h1 className={styles.contentHeaderWhite}>Hail Happens</h1>
          <p>We're experts in dealing with complicated roof repair and insurance companies.</p>
          <div className={styles.buttonRow}>
            <Link onClick={this.handleClick} to="/estimate"><p className={styles.calloutButton1}>Get Your Free Estimate</p></Link>
          </div>
        </ContentBox>
      </div>
    )
  }
}