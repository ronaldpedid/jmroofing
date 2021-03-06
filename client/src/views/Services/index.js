import React, { Component } from 'react';
import styles from '../../index.scss';
import { BoxCalloutService } from '../../components/boxes/Box';
import newConstruction from './newConData';
import resdientialData from './residentialData';

export class ServiceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewToDisplay: 'New Construction',
      newConstructionData: newConstruction,
      residentialConData: resdientialData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state.residentialConData);
    let newConQuote = 'We take great care in topping off any newly create home. Attention to detail will help turn a new house into a new home.';
    let residentialConQuote = 'Helping you weather the storm is our passion. Getting you the best deals on repairs, additions, or a new roof. J & M Roofing is there when you need them.';
    return (
      <div>
        <section className={styles.serviceSection}>
          <div className={styles.serviceLander}>
            <h1>We'll Help You Get to the Right Solutions for Your Project.</h1>
            <div className={styles.selectorServicesGroup}>
              <select className={styles.selectorServices} name="viewToDisplay" onChange={this.handleChange}>
                <option className={styles.option}>New Construction</option>
                <option className={styles.option}>Residential</option>
              </select>
            </div>
          </div>
          <div>
            {this.state.viewToDisplay === 'New Construction' ?
              <div className={styles.serviceSection}>
                <h1 className={styles.typeHeader}>New Construction</h1>
                <div className={styles.contentRowThumbNails}>
                  {this.state.newConstructionData.map((data, index) => (
                    <div key={`newc${index}`} className={styles.imgCell}>
                      <img className={styles.thumbnails} src={this.state.newConstructionData[index].url} alt={this.state.newConstructionData[index].alt} />
                    </div>
                  ))}
                </div>
                <h4 className={styles.serviceCopy}>
                  {newConQuote}
                </h4>
              </div>
              : ''}
            {this.state.viewToDisplay === 'Residential' ?
              <div className={styles.serviceSection}>
                <h1 className={styles.typeHeader}>Residential</h1>
                <div className={styles.contentRowThumbNails}>
                  {this.state.residentialConData.map((data, index) =>
                    (<div key={`res${index}`} className={styles.imgCell}>
                      <img className={styles.thumbnails} src={this.state.residentialConData[index].url} />
                    </div>
                    ))}

                </div>
                <h4 className={styles.serviceCopy}>
                  {residentialConQuote}
                </h4>
              </div> : ''}
          </div>
        </section>
        <BoxCalloutService />
      </div>
    )
  }
}
