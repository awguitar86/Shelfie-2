import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ShelfA from './components/ShelfA/ShelfA';
import ShelfB from './components/ShelfB/ShelfB';
import ShelfC from './components/ShelfC/ShelfC';
import ShelfD from './components/ShelfD/ShelfD';
import ShelfAItem from './components/ShelfA/ShelfAItem';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/shelfa" component={ShelfA}/>
        <Route path="/shelfb" component={ShelfB}/>
        <Route path="/shelfc" component={ShelfC}/>
        <Route path="/shelfd" component={ShelfD}/>
        <Route path="/create/A1" component={ShelfAItem} />
      </div>
    );
  }
}

export default App;
