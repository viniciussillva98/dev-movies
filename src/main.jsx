import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from "../src/routes/routes.jsx"
import  GlobalStyle  from '../src/styles/GlobalStyles.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>,
)
