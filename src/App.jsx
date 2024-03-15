import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Index'
import About from './Pages/Home/About'
import Contact from './Pages/Home/Contact'
import Projects from './Pages/Home/Projects'
import Header from './Components/Header'



function App() {



  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
