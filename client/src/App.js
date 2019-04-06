import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeView } from './views/Home';
import { ContactView } from './views/Contact/cForm';
import { Footer } from './components/footer/Footer';
import { Navigation } from './components/navigation/navigation';
import { AboutView } from './views/About';

const NoMatch = ({ location }) => (
  <div className={styles.errorPage}>
    <img src={errImg} alt="404 not found" />
    <h3>Whoops! Page not found.</h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/estimate" component={ContactView} />
            <Route path="/about" component={AboutView} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;