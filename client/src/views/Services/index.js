import React, { Component } from 'react';
import styles from '../../index.scss';
import { BoxCalloutService } from '../../components/boxes/Box';

export class ServiceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewToDisplay: 'New Construction'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let stormImages = [
      {
        url: 'https://res.cloudinary.com/the-sage-mages/image/upload/v1554313084/jmroofing/2landingservice.png',
        alt: 'alt text'
      },
      {
        url: 'https://res.cloudinary.com/the-sage-mages/image/upload/v1554313084/jmroofing/2landingservice.png',
        alt: 'alt text'
      },
      {
        url: 'https://res.cloudinary.com/the-sage-mages/image/upload/v1554313084/jmroofing/2landingservice.png',
        alt: 'alt text'
      }
    ];
    return (
      <div>
        <section className={styles.serviceSection}>
          <div className={styles.serviceLander}>
            <h1>We'll Help You Get to the Right Solutions for Your Project.</h1>
            <div className={styles.selectorServicesGroup}>
              <select className={styles.selectorServices} name="viewToDisplay" onChange={this.handleChange}>
                <option className={styles.option}>New Construction</option>
                <option className={styles.option}>Storm Damage Repairs</option>
                <option className={styles.option}>Skylight Repairs</option>
              </select>
            </div>
          </div>
          <div>
            {this.state.viewToDisplay === 'New Construction' ?
              <div className={styles.serviceSectionInner}>
                <h1 className={styles.typeHeader}>New Construction</h1>
                <div className={styles.contentRowThumbNails}>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                </div>
                <div className={styles.contentRowThumbNails}>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                </div>
              </div>
              : ''}
            {this.state.viewToDisplay === 'Tile Damage' ?
              <div className={styles.serviceSection}>
                <h1 className={styles.typeHeader}>Tile Damage</h1>
                <div className={styles.contentRowThumbNails}>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                </div>
              </div> : ''}
            {this.state.viewToDisplay === 'Skylights' ?
              <div className={styles.serviceSection}>
                <h1 className={styles.typeHeader}>Skylights</h1>
                <div className={styles.contentRowThumbNails}>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                  <div className={styles.imgCell}>
                    <img className={styles.thumbnails} src={stormImages[0].url} />
                    <h1>Img Header</h1>
                    <p>Img Blurb</p>
                  </div>
                </div>
              </div> : ''}
          </div>

        </section>
        <BoxCalloutService />
      </div>
    )
  }
}
