import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar';
//import Dashboard from './components/dashboard';
import BootcampDetails from './components/bootcampDetails';
import BootcampList from './components/bootcampList';

class App extends Component {
    render() {
    return (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                {/* <Route exact path='/' component={Dashboard} /> */}
                <Route path='/bootcamplist' component={BootcampList} />
                <Route path='/bootcampdetails' component={BootcampDetails} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
