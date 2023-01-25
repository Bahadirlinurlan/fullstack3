import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Add from './components/Pages/Add'
import Navbar from './components/Pages/Navbar'
import './App.css'
import Galary from './components/Corusel/Galary'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Gallery />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Add" element={<Add />}/>

    </Routes>
    
  </BrowserRouter>
  )
}

export default App;
