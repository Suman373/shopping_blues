import { useState } from 'react';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {

  return (
     <BRouter>
      <div className='min-h-screen bg-brand'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
     </BRouter>
  )
}

export default App;
