import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Personal from './components/pages/Personal';
import Work from './components/pages/Work';
import GetStarted from './components/pages/GetStarted';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/personal' component={Personal} />
          <Route path='/work' component={Work} />
          <Route path='/get-started' component={GetStarted} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
