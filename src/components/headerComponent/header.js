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
                            <a id="Signin" href="#">Sign In</a>
                        </li>
                        <li>
                            <a id="Signup" href="#">Sign Up</a>
                        </li>
                    </ul>
                </nav>

            </header>
        )
    }
}

export default Header;
