import React, { Component } from 'react'

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <header>

                <div className="logo">
                    LOGO
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>

            </header>
        )
    }
}

export default Header;
