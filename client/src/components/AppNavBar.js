import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class AppNavBar extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        console.log(this.state.isOpen);


        return (<div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <NavbarBrand href="/">Shopping List</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/amarvadla">
                                Github
                                </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>)
    }

}

export default AppNavBar