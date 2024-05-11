import { useState } from 'react'
import './App.css'
import  Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Sobre from './components/screens/Sobre/Sobre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
