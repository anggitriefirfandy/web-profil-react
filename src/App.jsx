import { useState, useEffect } from 'react'
import { Routes, Route, Link} from "react-router-dom"
import HomePage from './pages/HomePage'
import Article from './pages/Article'
import Portofolio from './pages/Portofolio'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './darkmode.css'

function App(theme) {

  // const [theme, setTheme] = useState("")
  // const toggleTheme = () => {
  //     if (theme === "dark") {
  //         setTheme("light")
  //         console.log(theme)
  //     }else {
  //         setTheme("dark")
  //     }
  // }
  // useEffect(() => {
  //     document.body.className = theme;
  //     console.log(theme)
  // }, [theme])

  return (
   <div className={theme}>
    <Navbar  />
    {/* <button onClick={toggleTheme} className="btn-toggle">Toggle Theme</button> */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/portofolio' element={<Portofolio />} />
      <Route path='/article' element={<Article />} />
      <Route path='/aboutpage' element={<AboutPage />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
