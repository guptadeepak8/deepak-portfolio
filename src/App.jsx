import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import './index.css'

function App() {

  return (
    <div className='bg-black font-mono'>
       <Navbar/>
       <Home/>
       <About/>
       <Projects/>
       <Blog/>
       <Footer/>
    </div>
  )
}

export default App
