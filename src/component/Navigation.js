import React from 'react'
import {Nav, Container, Navbar} from 'react-bootstrap'

function Navigation() {
    return (
        <div>
           <Navbar bg="primary" variant="dark" >
                <Container>
                  
                    <Nav className="me-auto" display = "flex">
                        <Nav.Link href="/">Home</Nav.Link><br/>
                        <Nav.Link href="/create">Create</Nav.Link><br/>
                        <Nav.Link href="/read">Read</Nav.Link><br/>
                        
                      
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
