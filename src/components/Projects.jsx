import { Container,Row,Col} from "react-bootstrap"
import ProjectCard from './ProjectCard';
import newsApp from '../assets/img/newsApp.png';
import groceryApp from '../assets/img/groceryApp.png';
import covidApp from '../assets/img/covidApp.png';
import memeShare from '../assets/img/memeShare.png';
import backend from '../assets/img/backendApp.png';
import newsWebApp from '../assets/img/newsWebApp.jpg';

const Projects=()=>{
    const projects = [
        {
          title: "Tech News",
          description: "Android App",
          imgUrl: newsApp,
          link:'https://github.com/Ash-333/news-app'
        },
        {
          title: "Grocery Shop",
          description: "Android App",
          imgUrl: groceryApp,
          link:'https://github.com/Ash-333/Grocery-App'
        },
        {
          title: "Covid Tracker",
          description: "Android App",
          imgUrl: covidApp,
          link:'https://github.com/Ash-333/news-app'
        },
        {
          title: "News web App",
          description: "Design & Development React",
          imgUrl: newsWebApp,
          link:'https://github.com/Ash-333/news-app'
        },
        {
          title: "Meme Share App",
          description: "Android App",
          imgUrl: memeShare,
          link:'https://github.com/Ash-333/news-app'
        },
        {
          title: "Todo  CRUD api",
          description: "Nodejs Backend",
          imgUrl: backend,
          link:'https://github.com/Ash-333/news-app'
        },
        
      ];

      return(
        <section className="project" id="project">
            <Container>
                
                    <Col>
                        <h2>Projects</h2>
                        <p>These are some of my personal project and these are sample of my works and representation of my knowledge.</p>
                    
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                    </Col>
                
            </Container>
            
        </section>
      )
}
//<img className="background-image-right" src={colorSharp2} alt='img'/>

export default Projects