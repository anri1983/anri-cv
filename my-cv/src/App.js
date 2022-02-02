import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



function App () {
  return (
    <div className='containerApp'>
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
