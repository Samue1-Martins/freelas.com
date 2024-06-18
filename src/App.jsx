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
import AreaAluno from './components/screens/AreaAluno/AreaAluno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path="/freelas.com" element={<Main />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/freelas.com/sobre" element={<Sobre />} />
            <Route path="/freelas.com/sobre-curso" element={<SobreCurso />} />
            <Route path="/freelas.com/quem-somos-nos" element={<CardFotos />} />
            <Route path="/freelas.com/freelancers" element={<Freelancers />}/> 
            <Route path="/freelas.com/area-aluno" element={<AreaAluno/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
