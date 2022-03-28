import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import AboutAuthor from './components/routes/aboutAuthor';
import AboutApp from './components/routes/aboutApp';
import Navbar from './components/routes/Navbar';


const rootElement = document.getElementById("root")
render (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='aboutApp' element={ <AboutApp/> } />
      <Route path='aboutAuthor' element={ <AboutAuthor/> } />
      <Route path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>Tidak ada page disini!</p>
        </main>
      }
      />
    </Routes>
    
  </BrowserRouter>,
  rootElement
);
