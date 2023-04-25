import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import ProjectsList from './Components/Projects/ProjectsList';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About/About';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
// import ProjectDetails from './Components/ProjectsDetails/ProjectDetails';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
function App() {
  const [list, setList] = useState(ProjectsList)
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navigation />
            <Hero />

            <Projects list={list} />
            <Contact />
          </>
        } />

        <Route path='/about' element={
          <>
            <Navigation />
            <About />
          </>
        } />


        <Route path='/projects/:id' element={
          <ScrollToTop>
            <Navigation />
            <ProjectDetails />
            <Contact />
          </ScrollToTop>
        } />



      </Routes>
    </Router>

  );
}

export default App;
