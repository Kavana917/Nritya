# Nritya Kalā Mandir — Bharatanatyam School Website

Single-page Next.js site with Sanity CMS for a Bharatanatyam school. Phase 1 covers hero, guru, classes, gallery, achievements, FAQ, and contact/trial booking.

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS**
- **Sanity.io** (embedded Studio at `/studio`)
- Deploy on **Vercel**

## Quick start

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without a Sanity project ID, the site renders rich **placeholder content** so you can design and demo immediately.

## Connect Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage).
2. Put the project ID and dataset in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Restart `npm run dev`, then open [http://localhost:3000/studio](http://localhost:3000/studio).
4. Sign in and create documents:

| Studio item | Notes |
|-------------|--------|
| **Site Settings** | School name, city, phone, email, WhatsApp (digits + country code), map embed URL, socials, SEO |
| **Hero** | Headline, subheadline, CTAs, image |
| **Guru / Instructor** | Bio, lineage, credentials, philosophy, photo |
| **Classes & Programs** | One doc per batch |
| **Gallery** | Photos / optional YouTube URL |
| **Achievements** | Arangetram, competition, exam |
| **Testimonials** | Parent / student quotes |
| **FAQs** | Question + answer + sort order |

Singletons (Site Settings, Hero, Guru) appear as fixed items in the Studio sidebar.

## Contact form

`POST /api/contact` validates the form and returns WhatsApp + mailto deep links. The browser opens WhatsApp (preferred) or email so the enquiry is sent without a paid email provider.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the project in [vercel.com](https://vercel.com).
3. Add the same env vars as `.env.local` (especially `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`).
4. Deploy. Studio is available at `https://your-domain/studio`.

In Sanity → API → CORS origins, add your Vercel domain and `http://localhost:3000`.

## Project structure

```
app/                 # Pages, layout, API
components/          # Section UI
sanity/              # Schemas, client, queries
lib/                 # Types, fallback data, fetch helper
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
