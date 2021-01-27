import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="Light bg-primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">FireBase Auth</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header