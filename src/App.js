import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Business from './components/pages/Business';
import Products from './components/pages/Products';
import Signup from './components/pages/SignUp';
import Login from './components/pages/Login'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/business' component={Business} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
