import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import ScrollUp from './components/ScrollUp'
import './styles/app.scss'

function App() {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <Projects/>
      <About/>
      <ScrollUp/>
    </>
  )
}

export default App
