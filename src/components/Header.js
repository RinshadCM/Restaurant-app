import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import './Header.css'

function Header() {
    return (
        <>
            <header>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        <Image className='head' src="https://i.postimg.cc/635Rsxkp/Black-Gold-White-Luxury-Vintage-Decorative-Ornamental-Kitchen-and-Restaurant-Logo.png" alt="Your logo" height="50" width="50" />
                        <span className="ml-3 head" style={{ fontSize: '1.5em' }}>RestaurantGuide</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    )
}

export default Header