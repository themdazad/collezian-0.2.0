import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import Path from './Path.jsx'
import Nav from './components/Nav.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Footer_Component } from './components/Footer_Component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NextUIProvider className="dark text-foreground bg-gray-900" >
      <Nav />
      <Path />
      <Footer_Component/>
    </NextUIProvider>
  </BrowserRouter>,
)
