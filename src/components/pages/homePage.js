import React, { Component, Button } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
class HomePage extends Component {
    render() {
        return (
           <div id="main-body" className = "container-fluid">

               <h1 id="title">
               LOGO
               </h1>
               
                <div id="middle_sec">
                    <h1 id="middle">Address</h1>
                    <a id="Search" href="#" class="button">Link Button</a>
                    <button>Button</button>
                </div>

           </div>
        )
    }
}

export default HomePage;
