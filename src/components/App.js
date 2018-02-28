import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AddBin from './AddBin';
import Bin from './Bin';
import BinList from './BinList';
import ShelfList from './ShelfList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ShelfList}   />
        <Route path='/shelf/:id/' component={BinList} />
        <Route path='/create/:id' component={AddBin}  />
        <Route path='/bin/:id' component={Bin}        />
      </div>
    );
  }
}

export default App;
