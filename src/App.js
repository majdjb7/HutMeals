import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import Header from './components/headerComponent/header'
import HomePage from './components/pages/homePage'
import Footer from './components/footerComponent/footer'
import './Assets/css/default-css.scss'
import './Assets/css/homePage.scss'

function App() {
  return (
    <div id="App" className='App'>

      <Header />

      <HomePage />

      <Footer />

    </div>
  );
}

export default App;

