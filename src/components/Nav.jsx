import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav_icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function NavBar() {

    const [activeLink,setActiveLink]=useState('home')
    const [scrolled,setScrolled]=useState(false)

    useEffect(()=>{
        if(window.scrollY>50){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
        window.addEventListener("scroll",onscroll);

        return ()=>window.removeEventListener("scroll",onscroll)
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
  return (
    <Navbar  expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='Logo'/></ Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className='navbar-toggle-icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link' :'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink==='skills'?'active navbar-link' :'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='projects'?'active navbar-link' :'navbar-link' } onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
            <a href={'https://www.linkedin.com/in/ashishkamat0/'}><img src={navIcon1} alt=''/></a>
            <a href={'https://www.facebook.com/ashishraj.kumarkamat/'}><img src={navIcon2} alt=''/></a>
            <a href={'https://www.instagram.com/ashishrajkamat/'}><img src={navIcon3} alt=''/></a>
            </div>
            <button className='vvd'><a href='#contact'><span>Let's connect</span></a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;