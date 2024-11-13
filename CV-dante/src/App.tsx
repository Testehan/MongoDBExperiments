import {ToastContainer} from "react-toastify";

import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (
    <>
      <ToastContainer/>
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
