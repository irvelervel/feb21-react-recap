import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const NavBar = (props) => (
    <Navbar bg="primary" variant="dark">
        <Link className="nav-link" to="/">
            <Navbar.Brand>Navbar</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
        </Nav>
    </Navbar>
)

export default NavBar