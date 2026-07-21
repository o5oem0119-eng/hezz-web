import { renderToString } from 'react-dom/server';
import { PublicWebsite } from './features/hezz-studio/website/PublicWebsite';

export function renderPublicWebsite() {
  return renderToString(<PublicWebsite />);
}
