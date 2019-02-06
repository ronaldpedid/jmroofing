import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeView } from './views/Home';
import styles from './index.scss';
import { ContactRender } from './views/Contact/cForm';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <a href='/contact'>Link To contact</a>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/contact" component={ContactRender} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;