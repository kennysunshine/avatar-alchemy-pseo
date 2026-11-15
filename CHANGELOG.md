# Changelog

## [Unreleased] — branch `one-story`, Step 1: shared look and navigation

### Changed
- New shared header and footer, kept identical with avatar-alchemy.com (`src/components/shared/`).
  - Navigation: Home | AI Visibility | Programmatic SEO | Video & AI Avatars | Pricing | About (full menu on screens 1280px and wider; ☰ menu below that), plus the "Book a free AI visibility check" button. Everything except Programmatic SEO links to the main site.
  - Footer: trading name "Avatar Alchemy" (was "Avatar Alchemy AI"), Somerset, UK (Glastonbury removed, as Kenny asked), email and Privacy.
  - The new navy logo replaces the old brain logo in the header.
  - The "← All industries" back link on industry pages is gone; "Programmatic SEO" in the menu goes back to the industry list.
- One call to action everywhere: "Book a free AI visibility check", going to www.avatar-alchemy.com/book (Calendly). Previously "Book a free call" and "Book a free 30-minute call" went straight to Calendly.
- The text under the main button now mentions showing what ChatGPT and Gemini say about the business, as well as the search map.
- Base font set to Geist (pages already used it).
- Glastonbury removed from the About section, the link-preview image and the Privacy page; they now say Somerset. The About section adds that Kenny works with businesses wherever they are.

## [Unreleased] — branch `one-story`, Step 5: pSEO site

- Pricing section: added "Not ready for a full build? Start with AI Visibility from £395/month", linking to www.avatar-alchemy.com/pricing, plus a "Compare all plans and prices" link.
- Monthly plan: added "Everything in AI Visibility (schema, Google Business Profile, listings, reviews, monthly AI check)", both on the pricing card and in "What you get".
- Prices now come from the shared file (`src/components/shared/site-links.ts`), the same one the main site uses, so they can't drift apart.
- The About section uses the shared wording, so it's identical on both sites.
- "Law Firms" industry removed. /legal redirects to the homepage.
- Not changed, flagged for Kenny: The Shiftpoint's description ("addiction recovery clinic").
