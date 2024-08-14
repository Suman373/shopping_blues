import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {

  return (
    <CartProvider>
      <BRouter>
        <div className='min-h-screen w-screen bg-gradient-to-b from-brand to-white '>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </BRouter>
    </CartProvider>
  )
}

export default App;
