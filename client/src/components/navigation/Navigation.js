import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import styles from '../../index.scss';

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openMenu() {
    this.setState({ navIsOpen: true });
  }
  closeMenu() {
    this.setState({ navIsOpen: false });
  }

  handleClick() {
    this.setState({ navIsOpen: false })
    document.getElementById('root').scrollIntoView();
  }
  render() {
    return (
      <nav className={styles.navBox}>
        <Link to="/">
          <h1 className={styles.logo} onClick={this.handleClick}>JM Roofing <span className={styles.thinText}>of NWA</span></h1>
        </Link>
        <Media query={{ maxWidth: 797 }}>
          {matches => matches ?
            (
              <div>
                {this.state.navIsOpen ?
                  <div className={styles.subNavBox}>
                    <div>
                      <NavOpen onClick={this.closeMenu} />

                      <ul>
                        <Link to="/">
                          <h1 className={styles.logoMobile} onClick={this.handleClick}>JM Roofing <span className={styles.thinText}>of NWA</span></h1>
                        </Link>                        <Link to="/about"><li onClick={this.handleClick} className={styles.navChildM}>About Us</li></Link>
                        <Link to="/services"><li onClick={this.handleClick} className={styles.navChildM}>Services</li></Link>
                        <Link to="/estimate"><li onClick={this.handleClick} className={styles.navChildM}>Estimate</li></Link>
                      </ul>
                      <div className={styles.menuInfo}>
                        <h6 className={styles.contentHat}>Serving Northwest Arkansas</h6>
                        <a className={styles.hyperline} href="tel:479-555-4949">479-555-4949</a>
                        <a className={styles.hyperline} href="mailto:info@jmroofing.com">info@jmroofing.com</a>
                      </div>
                    </div></div> : <NavClosed onClick={this.openMenu} />}
              </div>)
            : (
              <div className={styles.navItemBox}>
                <ul>
                  <Link to="/about"><li onClick={this.handleClick} className={styles.navChild}>About Us</li></Link>
                  <Link to="/services"><li onClick={this.handleClick} className={styles.navChild}>Services</li></Link>
                  <Link to="/estimate"><li onClick={this.handleClick} className={styles.navChild}>Estimate</li></Link>
                </ul>
              </div>
            )}

        </Media>
      </nav>
    )
  }
}



class NavOpen extends Navigation {
  render() {
    return (
      <div className={styles.mobileNav}>
        <h1 className={styles.menu} onClick={this.props.onClick}>X</h1>
      </div>
    )
  }
}
class NavClosed extends Component {
  render() {
    return (<div className={styles.mobileNavClosed}>
      <h1 className={styles.menu} onClick={this.props.onClick}>Menu</h1>
    </div>)
  }
}