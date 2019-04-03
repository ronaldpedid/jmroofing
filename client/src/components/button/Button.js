import React, { Component } from 'react';
import styles from '../../index.scss';


export class Button extends Component {
  constructor(props) {
    super(props);
    const {
      className,
      onClick
    } = this.props;
  }
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
