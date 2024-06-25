import Build from './components/build'
import Digit from './components/digit'
import Feature from './components/feature'
import Find from './components/find'
import Hero from './components/hero'
import Navbar from './components/navbar'
import './App.css'
import Footer from './components/footer'

function App() {
  

  return (
    <div className='container-fluid'>
    <div className='bg-curve'>
      <div className='hero'>
      <Navbar />
      <Hero />
      </div>
    </div>
    <Feature /> 
    <Find />
    <div className='bg-build'>
      <div className='bg-line'>
        <Build />
      </div>
      
    </div>
    <Digit />
    <div className="container-fluid bg-black text-white">
    <Footer />
    </div>
      
    
  </div>
  )
}

export default App;



