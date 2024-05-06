import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import Path from './Path.jsx'
import Nav from './components/Nav.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NextUIProvider className="dark text-foreground bg-background">
      <Nav />
      <Path />
    </NextUIProvider>
  </BrowserRouter>,
)
