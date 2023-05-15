import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar/Navbar.jsx'
import Home from "./components/Home/index.jsx"
import About from './components/About/index.jsx'
import Footer from './components/Footer/index.jsx'
import Layout from './UI/Layout'
import Services from "./components/Services/index.jsx"
import Career from './components/Career/Career'
import Products from './components/Products/Products'


function App() {
  

  return (
    <div className='App'>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/career" element={<Career />} />
          </Route>
        </Routes>
      </BrowserRouter>

  
    </div>
  )
}

export default App
