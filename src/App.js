

import "./App.css";

// import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import About from "./Components/About";
// import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
// import { GithubStats } from "./Components/GithubStats";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Project";
import GithubStats from "./Components/GithubStats/Githubstats";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTopButton from "./Components/ScrollToTop/ScrollToTopButton";

function App() {
  return (
    // <Box bg={useColorModeValue("#ecf9ff", "#171717")} className="App">
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <GithubStats />
    //   <Contact />
    // </Box>
    <div className="app-css">
      <ScrollToTopButton/>
      <Navbar/>
      <About/>
      <Blogs/>
      <Skills/>
      <Projects/>
      <GithubStats/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App; 