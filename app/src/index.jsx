import { StrictMode } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/**
 * launch React app
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
