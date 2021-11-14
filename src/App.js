import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import pastTrips from './components/pages/pastTrips';
import SignUp from './components/pages/SignUp';
import Trips from './components/pages/Trips';
import ComingSoon from './components/comingsoon';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pastTrips' component={pastTrips} />
          <Route path='/trips' component={Trips} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/comingsoon' component={ComingSoon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
