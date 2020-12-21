import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { IoHome } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { MdRestaurant } from 'react-icons/md'

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <header>

                <div className="logo">
                    LOGO
                </div>

                <button class="btn">   <MdRestaurant></MdRestaurant> Partner With Us </button>
                
                <button class="btn2">   <IoHome> </IoHome> Sign In </button>

                <button class="btn3">   <FaUser></FaUser> Sign Up </button>

        

            </header>
        )
    }
}

export default Header;
