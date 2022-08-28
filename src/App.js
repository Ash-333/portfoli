import './App.css';
import NavBar from './components/Nav';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (<div>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

