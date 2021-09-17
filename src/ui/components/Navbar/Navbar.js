import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import * as styles from './Navbar.module.css'
import MediaQuery from 'react-responsive'
import { Link, NavLink, useHistory } from 'react-router-dom';

export default function Navigation() {
    const history = useHistory();
    const buttonClickHandler = () => {
        history.push('/login/');
    }
    return (
        <section>
            <Navbar bg="light" expand="xl" className={styles.navbar} fixed="top">
                <Navbar.Brand as={Link} to={`/`} className={styles.logo}>AASHROY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navcollapse}>
                <Nav>
                    <Nav.Link activeClassName={styles.active} exact as={NavLink} to={`/`}>Home</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={`/report/`}>Report</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={`/complain/`}>Complain</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={`/donate/`}>Donate</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={`/about/`}>About Us</Nav.Link>
                    <MediaQuery maxWidth={1200}>
                        <Nav.Link href={`/login/`}>Login</Nav.Link>
                    </MediaQuery>
                </Nav>
                </Navbar.Collapse>
                <MediaQuery minWidth={1200}>
                    <button type="button" onClick={buttonClickHandler} className={styles.login_button}>LOGIN</button>
                </MediaQuery>
            </Navbar>
        </section>
    )
}
