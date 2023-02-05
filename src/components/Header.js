import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';

function Header() {
    return (
        <>
            <header>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        <Image src="https://i.postimg.cc/T1w25xhj/Chef-hat-with-spoon-and-fork-logo-design-2.png" alt="Your logo" height="50" width="50" />
                        <span className="ml-3" style={{ fontSize: '1.5em' }}>Rio Kitchen</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#menu">Menu</Nav.Link>
                            <Nav.Link href="#reservations">Reservations</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    )
}

export default Header