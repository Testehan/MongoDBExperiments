
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

import './App.css'

function App() {


  return (
    <>
      <div className="font-sans text-gray-900">
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
