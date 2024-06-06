import { useState } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import './App.css'

// import de components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import CardFotos from './components/CardFotos/CardFotos'

// Import de telas
import Login from './components/screens/Login/Login'
import Sobre from './components/screens/Sobre/Sobre'
import SobreCurso from './components/screens/SobreCurso/SobreCurso'
import Freelancers from './components/screens/Freelancers/Freelancers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/sobre-curso" element={<SobreCurso />} />
            <Route path="/quem-somos-nos" element={<CardFotos />} />
            <Route path='/freelancers' element={<Freelancers />}/> 
          </Routes>
        </>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
