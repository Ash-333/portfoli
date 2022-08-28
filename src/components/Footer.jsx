import { Container,Row,Col} from "react-bootstrap"
import navIcon1 from '../assets/img/nav_icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.svg';
const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icons">
                            <a href=""><img src={navIcon1}/></a>
                            <a href=""><img src={navIcon2}/></a>
                            <a href=""><img src={navIcon3}/></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
            </Container>
        </footer>
    )
}

export default Footer
