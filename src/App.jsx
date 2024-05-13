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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/sobre-curso" element={<SobreCurso />} />
            <Route path="/quem-somos-nos" element={<CardFotos />} />
          </Routes>
        </>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
