
import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap'

import { Outlet, Link } from 'react-router-dom'

const MyNavbar = () => {
  

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container >
          <Navbar.Brand href="#home">CryptoCurrency</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to='/' className='ps-5'>Dashboard</Nav.Link>
              <Nav.Link as={Link} to='/news'className='ps-5' >Crypto News</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


<section>
  <Outlet/>
</section>

    </>
  )
}

export default MyNavbar
