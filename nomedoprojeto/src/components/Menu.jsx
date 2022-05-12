import React from 'react'
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>



      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/cursos">Cursos</Link>
          <Link className="nav-link" to="/alunos">Alunos</Link>
          <Link className="nav-link" to="/diciplina">Diciplina</Link>
          <Link className="nav-link" to="/nome">Nome</Link>
          <Link className="nav-link" to="/duracao">Duração</Link>
          <Link className="nav-link" to="/modadlidade">Modadlidade</Link>

          

        </Nav>
        </Container>
      </Navbar>


    </div>


  )
}

export default Menu