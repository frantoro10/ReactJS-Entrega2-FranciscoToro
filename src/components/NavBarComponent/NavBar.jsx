// para practicar hook / estado
import {useState} from "react";
import {Link} from "react-router-dom";
// Componentes de bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Componentes propios
import CartWidget from '../CartWidget/CartWidget';
// Librerias animaciones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-solid-svg-icons'
// Styles
import styles from "./NavBar.module.scss"   

const NavBarComponent = () => {
// practica hook/estado
  const [isOnline, setIsOnline] = useState(false);
  const handleUserLogin = () => {
    setIsOnline(!isOnline) 
    console.log(isOnline)
    }

  return (
    <Navbar expand="lg" bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand><Link to={"/"}> Electro Shop </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={"category/Celulares"}> Celulares </Link> </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to={"category/Electrodomésticos"}> Electrodomésticos </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to={"category/Computación"}> Computación </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
      <div className={styles.faUserS} onClick={handleUserLogin}>
       <FontAwesomeIcon icon={faUser}/>                             
       <h5>{isOnline ? "Online" : "Offline"}</h5> 
      </div>  
    </Navbar>
  );
}

export default NavBarComponent;

