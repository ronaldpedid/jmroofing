import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeView } from './views/Home';
import styles from './index.scss';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomeView} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;