import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';

function App() {

  return (
    <CartProvider>
      <BRouter>
        <div className='min-h-screen bg-brand'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </div>
      </BRouter>
    </CartProvider>
  )
}

export default App;
