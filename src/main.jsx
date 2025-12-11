import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MoonPayProvider } from '@moonpay/moonpay-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoonPayProvider
      apiKey="pk_test_123"
      debug
    >
      <App />
    </MoonPayProvider>
  </StrictMode>,
)
