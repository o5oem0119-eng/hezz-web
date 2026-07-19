import { readFile, rm, writeFile } from 'node:fs/promises';

const distUrl = new URL('../dist/index.html', import.meta.url);
const serverEntryUrl = new URL('../dist-ssr/entry-server.js', import.meta.url);
const ssrOutputUrl = new URL('../dist-ssr/', import.meta.url);

const [{ renderPublicWebsite }, template] = await Promise.all([
  import(serverEntryUrl.href),
  readFile(distUrl, 'utf8'),
]);

const appHtml = renderPublicWebsite();
const output = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

if (!appHtml.includes('<main')) {
  throw new Error('Static rendering produced no public page content.');
}

if (output === template) {
  throw new Error('Unable to locate the root element in the Vite HTML template.');
}

await writeFile(distUrl, output, 'utf8');
await rm(ssrOutputUrl, { recursive: true, force: true });
