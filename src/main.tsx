import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { PublicWebsite } from './PublicWebsite';
import './main.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <PublicWebsite />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
