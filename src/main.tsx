import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/auth/provider.tsx';
import AlertProvider from './store/alert/provider.tsx';
import { TicketProvider } from './store/ticket/provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <TicketProvider>
            <App />
          </TicketProvider>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  </StrictMode>
);
