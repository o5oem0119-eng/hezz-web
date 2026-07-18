import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PublicWebsite } from './PublicWebsite';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PublicWebsite />
  </StrictMode>,
);
