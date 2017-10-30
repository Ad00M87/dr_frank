import React, { Component } from 'react';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Organs from './components/Organs';
import ContactUs from './components/ContactUs';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/organs' component={Organs} />
            <Route exact path='/contact_us' component={ContactUs} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
