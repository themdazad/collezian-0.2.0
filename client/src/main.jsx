import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import Nav from './components/Nav'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider className="dark text-foreground bg-background">
      {/* Naviagtion appear in each pages   */}
      <Nav />
      {/* contained all Routes /App.jsx */}
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
