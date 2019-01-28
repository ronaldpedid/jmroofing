import React, { Component } from 'react';
import styles from './home.scss';

export class HomeView extends Component {
  render() {
    return (
      <div className={styles.gridWrapper}>

        <div className={styles.leftGridPanel}>
          <p>
            Purus in mollis nunc sed id semper risus.
             Facilisi etiam dignissim diam quis enim lobortis.
             Fermentum dui faucibus in ornare. Nisi porta lorem mollis
              aliquam ut porttitor leo a. Ullamcorper a lacus vestibulum sed
              arcu non odio euismod. Libero justo laoreet sit amet cursus sit amet
              dictum. Adipiscing elit duis tristique sollicitudin nibh sit amet.
              Faucibus interdum posuere lorem ipsum dolor. Amet luctus venenatis
              lectus magna fringilla urna porttitor rhoncus. Consequat semper viverra nam libero.
               Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
                Fames ac turpis egestas integer eget aliquet nibh praesent.
                Tortor at risus viverra adipiscing at in tellus integer feugiat.
          </p>

        </div>
        <div className={styles.midGridPanel}>      <p>
          Purus in mollis nunc sed id semper risus.
           Facilisi etiam dignissim diam quis enim lobortis.
           Fermentum dui faucibus in ornare. Nisi porta lorem mollis
            aliquam ut porttitor leo a. Ullamcorper a lacus vestibulum sed
            arcu non odio euismod. Libero justo laoreet sit amet cursus sit amet
            dictum. Adipiscing elit duis tristique sollicitudin nibh sit amet.
            Faucibus interdum posuere lorem ipsum dolor. Amet luctus venenatis
            lectus magna fringilla urna porttitor rhoncus. Consequat semper viverra nam libero.
             Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
              Fames ac turpis egestas integer eget aliquet nibh praesent.
              Tortor at risus viverra adipiscing at in tellus integer feugiat.
          </p></div>
        <div className={styles.rightGridPanel}>
          <p>
            Purus in mollis nunc sed id semper risus.
             Facilisi etiam dignissim diam quis enim lobortis.
             Fermentum dui faucibus in ornare. Nisi porta lorem mollis
              aliquam ut porttitor leo a. Ullamcorper a lacus vestibulum sed
              arcu non odio euismod. Libero justo laoreet sit amet cursus sit amet
              dictum. Adipiscing elit duis tristique sollicitudin nibh sit amet.
              Faucibus interdum posuere lorem ipsum dolor. Amet luctus venenatis
              lectus magna fringilla urna porttitor rhoncus. Consequat semper viverra nam libero.
               Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
                Fames ac turpis egestas integer eget aliquet nibh praesent.
                Tortor at risus viverra adipiscing at in tellus integer feugiat.
          </p>
        </div>

      </div>
    )
  }
}
