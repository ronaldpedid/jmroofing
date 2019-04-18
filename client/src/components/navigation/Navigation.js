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
          <h1 onClick={this.handleClick}>JM Roofing <span className={styles.thinText}>of NWA</span></h1>
        </Link>
        <Media query={{ maxWidth: 1199 }}>
          {matches => matches ?
            (
              <div>
                {this.state.navIsOpen ?
                  <div>
                    <NavOpen onClick={this.closeMenu} />
                    <ul>
                      <Link to="/about"><li onClick={this.handleClick} className={styles.navChildM}>About Us</li></Link>
                      <Link to="/services"><li onClick={this.handleClick} className={styles.navChildM}>Services</li></Link>
                      <Link to="/estimate"><li onClick={this.handleClick} className={styles.navChildM}>Estimate</li></Link>
                    </ul>
                  </div> : <NavClosed onClick={this.openMenu} />}
              </div>)

            : (
              <div>
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
        <h1 className={styles.menu} onClick={this.props.onClick}>Menu</h1>
      </div>
    )
  }
}
class NavClosed extends Component {
  render() {
    return (<div className={styles.mobileNav}>
      <h1 className={styles.menu} onClick={this.props.onClick}>Menu</h1>
    </div>)
  }
}