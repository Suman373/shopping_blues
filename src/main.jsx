import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center"
      reverseOrder={false} />
    <SkeletonTheme baseColor="#0000000e" highlightColor="#fffff0">
      <App />
    </SkeletonTheme>
  </StrictMode>,
)
