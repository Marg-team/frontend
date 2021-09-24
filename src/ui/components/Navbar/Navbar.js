import React, {useEffect, useState} from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import * as styles from './Navbar.module.css'
import MediaQuery from 'react-responsive'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';

export default function Navigation() {
    const history = useHistory();
    const location = useLocation();
    const buttonClickHandler = () => {
        if(isLogged){
            // localStorage.removeItem('secret_token');
            // localStorage.removeItem('ngoRef');
            // localStorage.removeItem('volunteerRef');
            // setIsLogged(false);
            // return;
            history.push('/admin/')
            return;
        }
        history.push('/login/');
    }

    const [isDark, setDark] = useState(false)
    const [isLogged, setIsLogged] = useState(null)

    useEffect(() => {
        if(location.pathname==="/complain/"){
            setDark(true);
        }else{
            setDark(false);
        }
    }, [location])

    useEffect(() => {
        if(!!localStorage.getItem('secret_token')){
            setIsLogged(true)
        }else(
            setIsLogged(false)
        )
    }, [])

    return (
        <section>
            <Navbar bg={"light"} expand="xl" className={styles.navbar} fixed="top">
                <Navbar.Brand as={Link} to={`/`} className={styles.logo}>AASHROY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navcollapse}>
                <Nav>
                    <Nav.Link activeClassName={styles.active} exact as={NavLink} to={{pathname: `/`, state: {scrolltop: true}}}>Home</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={{pathname: `/report/`}}>Report</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={{pathname: `/complain/`}}>Complain</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={{pathname: `/donate/`}}>Donate</Nav.Link>
                    <Nav.Link activeClassName={styles.active} as={NavLink} to={{pathname: `/about/`}}>About Us</Nav.Link>
                    <MediaQuery maxWidth={1200}>
                        <Nav.Link onClick={buttonClickHandler}>{!isLogged? "Login": "Admin"}</Nav.Link>
                    </MediaQuery>
                </Nav>
                </Navbar.Collapse>
                <MediaQuery minWidth={1200}>
                    <button type="button" onClick={buttonClickHandler} className={styles.login_button}>{!isLogged? "LOGIN": "ADMIN"}</button>
                </MediaQuery>
            </Navbar>
        </section>
    )
}
