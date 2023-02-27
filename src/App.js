import About from './Components/About';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Stats from './Components/Stats';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import { BiCaretUp } from 'react-icons/bi';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />

      <div className='icon-div'>
        <a href='#top' className='top-button'>
          <abbr title='Go To Top'>
            {' '}
            <BiCaretUp style={{ color: '#c12020', fontSize: '2.4rem' }} />
          </abbr>
        </a>
      </div>
    </div>
  );
}

export default App;