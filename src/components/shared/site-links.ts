// SHARED between avatar-alchemy.com and pseo.avatar-alchemy.com.
// This file, SiteHeader.tsx and SiteFooter.tsx are kept identical in both repos,
// except for THIS_SITE below. If you change one site's copy, copy it to the other.

export const THIS_SITE = "pseo" as "main" | "pseo";

export const MAIN_URL = "https://www.avatar-alchemy.com";
export const PSEO_URL = "https://pseo.avatar-alchemy.com";
export const CONTACT_EMAIL = "kenny.swann@avatar-alchemy.com";
export const TRADING_NAME = "Avatar Alchemy";
export const LOCATION = "Glastonbury, Somerset, UK";

// The one call to action used everywhere, on both sites.
export const CTA_LABEL = "Book a free AI visibility check";
// Goes to the booking page on the main site (Calendly embed).
export const CTA_PATH = "/book";

/** A link to a page on the main site: relative on the main site, absolute from the pSEO site. */
export const mainHref = (path: string) => (THIS_SITE === "main" ? path : `${MAIN_URL}${path}`);
/** A link to a page on the pSEO site: relative on the pSEO site, absolute from the main site. */
export const pseoHref = (path: string) => (THIS_SITE === "pseo" ? path : `${PSEO_URL}${path}`);

export const CTA_HREF = mainHref(CTA_PATH);

export const NAV_LINKS: { label: string; href: string }[] = [
    { label: "Home", href: mainHref("/") },
    { label: "AI Visibility", href: mainHref("/ai-visibility") },
    { label: "Programmatic SEO", href: pseoHref("/") },
    { label: "Pricing", href: mainHref("/pricing") },
    { label: "About", href: mainHref("/#about") },
];
