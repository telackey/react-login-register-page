import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    const basePath = "LACONIC_HOSTED_CONFIG_web_path"
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path={basePath} element={ <RegisterPage/> } />
                    <Route path={basePath + "/create"} element={ <RegisterPage/> } />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }><a href="https://www.cerc.io/" target="_blank" rel="noopener noreferrer">cerc.io</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
