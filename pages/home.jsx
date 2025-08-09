import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Start.module.css';

const home = () => {
  return (
    <div className={styles.bg}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 className={styles.text}>This is home page</h1>
    </div>
  )
}

export default home
