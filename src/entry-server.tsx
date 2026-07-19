import { renderToString } from 'react-dom/server';
import { PublicWebsite } from './PublicWebsite';

export function renderPublicWebsite() {
  return renderToString(<PublicWebsite />);
}
