import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { LabNoteRoute } from './features/hezz-studio/website/LabNotePages';
import { PublicWebsite } from './features/hezz-studio/website/PublicWebsite';
import './main.css';

const root = document.getElementById('root')!;
const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
const page = pathname === '/lab-notes' || pathname.startsWith('/lab-notes/')
  ? <LabNoteRoute pathname={pathname} />
  : <PublicWebsite />;
const app = <StrictMode>{page}</StrictMode>;

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
