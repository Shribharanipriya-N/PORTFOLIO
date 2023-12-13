//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Connect from './components/Connect';
function App() {
  return (
    <>
    <Navbar/>
    <div className='relative'>
      <Home/>
      </div>
      <div className='relative'>
      <About/>
      </div>
     <div className='relative '>
     <Projects/>
     </div>
    <div className='relative '>
    <Skills/> 
    </div>
    <div>
    <Connect/>
    </div>
    
  
    
    </>
  );
}


export default App;
