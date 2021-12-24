import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';
import Navigation from './component/Navigation';




ReactDOM.render(
  <>
  <Navigation/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<Create/>} />
      <Route path="read" element = {<Read/>}/>
      <Route path="update" element = {<Update/>}/>
    
    </Routes>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


