# Hive & Thrive — hiveandthrive.life

Personal website for Blessing (Bee) Nyamolo. Author, speaker, and finance executive.

## Stack
- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Wouter** (routing)
- **Sonner** (toast notifications)
- **Lucide React** (icons)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Ready to deploy anywhere.

## Deploy to Netlify (Recommended — Free)

1. Push this folder to a GitHub repo
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

The `netlify.toml` file already handles SPA routing.

## Deploy to Vercel (Alternative)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo — Vercel auto-detects Vite
4. Deploy!

The `vercel.json` handles SPA routing.

## Custom Domain

Once deployed to Netlify or Vercel, go to your domain settings and point:
- `hiveandthrive.life` → your Netlify/Vercel URL
- Add a `CNAME` or `A` record as instructed

## Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

To activate:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your Form ID
3. Open `src/pages/Contact.tsx`
4. Replace `YOUR_FORM_ID` with your actual Form ID

```ts
const FORMSPREE_ID = "xyzabcde"; // ← your real ID here
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | Meet Bee |
| `/honeycomb` | The Honeycomb (Blog + Bookshelf) |
| `/collections` | The Queen's Playbook |
| `/join` | Join the Swarm |
| `/queens-circle` | The Queen's Circle |
| `/contact` | Contact |

## Images

All images live in `public/images/` — fully owned, no external CDN dependency.
