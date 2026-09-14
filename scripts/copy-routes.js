// Post-build script: copy index.html into each route folder
// so GitHub Pages serves a 200 OK for all SPA routes.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import seoPages from '../src/lib/seo-pages.json' with { type: 'json' };

const siteUrl = 'https://hiveandthrive.life';
const routes = seoPages.filter((page) => page.path !== '/');
const aliases = [
  { path: '/the-hive/', target: '/' },
  { path: '/collections/', target: '/the-queens-playbook/' },
];

const distDir = join(process.cwd(), 'dist');
const source = join(distDir, 'index.html');

const originalHtml = readFileSync(source, 'utf8');

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function setTag(html, regex, tag) {
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function withSeo(html, page) {
  const canonicalUrl = `${siteUrl}${page.path}`;
  let updated = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);

  updated = setTag(updated, /<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${escapeHtml(page.description)}" />`);
  updated = setTag(updated, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  updated = setTag(updated, /<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  updated = setTag(updated, /<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(page.title)}" />`);
  updated = setTag(updated, /<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeHtml(page.description)}" />`);
  updated = setTag(updated, /<meta\s+property="og:image"[^>]*>/i, `<meta property="og:image" content="${page.image}" />`);
  updated = setTag(updated, /<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`);
  updated = setTag(updated, /<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`);
  updated = setTag(updated, /<meta\s+name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${page.image}" />`);

  return updated;
}

writeFileSync(source, withSeo(originalHtml, seoPages[0]));

for (const page of routes) {
  const route = page.path.replace(/^\/|\/$/g, '');
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(source, join(routeDir, 'index.html'));
  writeFileSync(join(routeDir, 'index.html'), withSeo(originalHtml, page));
  console.log(`Created dist/${route}/index.html with route SEO`);
}

for (const alias of aliases) {
  const page = seoPages.find((candidate) => candidate.path === alias.target);
  if (!page) {
    throw new Error(`Missing SEO target for alias ${alias.path}`);
  }

  const route = alias.path.replace(/^\/|\/$/g, '');
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), withSeo(originalHtml, page));
  console.log(`Created dist/${route}/index.html as alias for ${alias.target}`);
}

console.log('\nAll routes are indexed-ready.');
