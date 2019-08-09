import React, {Component} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Questions from './Components/Questions';
import Produto from './Components/Produto';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/questions" component={Questions} />
          <Route path="/produto" component={Produto} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
