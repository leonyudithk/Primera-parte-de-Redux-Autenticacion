import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';


const NavBars = () => {

        const dispatch = useDispatch();
        const navigate = useNavigate()

    const handleLogout=()=>{
            dispatch(logoutAsync())
            navigate("/login")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><a className="navbar-brand" href="/"><img
                        src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                        width="80" alt="" /></a></Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link onClick={handleLogout} >Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBars;