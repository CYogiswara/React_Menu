import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Recipe from './components/Menu/Menu.jsx';
import Main from './components/Main/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Form from './components/Form/Form.jsx';
import Update from './components/Update.jsx';
import MenuDetail from './components/Detail/MenuDetail.jsx';




function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Main/>} />
        <Route path="recipe" element={<Recipe/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path='update' element={<Update/>}/>
        <Route path="/detail/:id" element={<MenuDetail/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
