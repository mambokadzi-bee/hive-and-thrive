// Post-build script: copy index.html into each route folder
// so GitHub Pages serves a 200 OK for all SPA routes.
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const routes = [
  'about',
  'the-book',
  'queens-circle',
  'honeycomb',
  'collections',
  'join',
  'contact',
];

const distDir = join(process.cwd(), 'dist');
const source = join(distDir, 'index.html');

for (const route of routes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(source, join(routeDir, 'index.html'));
  console.log(`✅ Created dist/${route}/index.html`);
}

console.log('\n🐝 All routes are indexed-ready!');
