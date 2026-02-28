import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/albert-sans/400.css";
import "@fontsource/albert-sans/600.css";
import "@fontsource/albert-sans/700.css";
import "@fontsource/ibarra-real-nova/400.css";
import "@fontsource/ibarra-real-nova/600.css";
import "@fontsource/ibarra-real-nova/700.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
