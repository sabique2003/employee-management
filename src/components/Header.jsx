import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <>
    <Navbar className="bg-dark border none ">
        <Container>
          <Navbar.Brand href="/" className='text-light'>
          <i className="fa-solid fa-users" style={{color: "#9d0238",}} />
          {' '}
            Employee Management
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header