import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
// import HomePage from "./pages/HomePage";
// import Article from "./pages/Article";
// import Portofolio from "./pages/Portofolio";
// import AboutPage from "./pages/AboutPage";

function Navbar() {
  const [theme, setTheme] = useState("")
  const toggleTheme = () => {
      if (theme === "dark") {
          setTheme("light")
          console.log(theme)
      }else {
          setTheme("dark")
      }
  }
  useEffect(() => {
      document.body.className = theme;
      console.log(theme)
  }, [theme])
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-auto" id="navbarNav">
              <ul className="navbar navbar-nav">
                <li className="nav-item item">
                </li>
                <li className="nav-item item">
                  <Link to={"/"}>HomePage</Link>
                </li>
                <li className="nav-item item">
                <Link to={"/portofolio"}>Portofolio</Link>
                </li>
                <li className="nav-item item">
                  <Link to={"/article"}>Article</Link>
                </li>
                <li className="nav-item item">
                  <Link to={"/aboutpage"}>AboutPage</Link>
                </li>
                <li><button onClick={toggleTheme} className="btn-toggle">Toggle Theme</button></li>
              </ul>
            </div>
          </div>
          

        </nav>
      </div>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/article" element={<Article />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes> */}
    </>
  );
}
export default Navbar;
