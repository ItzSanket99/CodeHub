import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react'
import Header from './components/Header';
import './styles/App.scss';
import './styles/header.scss';
import Home from './components/Home';
import './styles/Home.scss';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/services.scss';
import './styles/mediaquerry.scss';


const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App