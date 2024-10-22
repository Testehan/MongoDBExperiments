import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import './components/counter'
import Counters from "./components/counters.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counters />
  </StrictMode>,
)
