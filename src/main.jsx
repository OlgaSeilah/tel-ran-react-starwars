import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    // позволяет найти ошибки архитектуры (устаревшие проблемы)
  // <StrictMode>
    <App />
  // </StrictMode>,
)
