//Css import
import './index.css'
//Component Import
import App from './App.jsx'
//Library Import
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
