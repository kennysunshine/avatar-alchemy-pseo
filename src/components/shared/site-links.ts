// SHARED between avatar-alchemy.com and pseo.avatar-alchemy.com.
// This file, SiteHeader.tsx and SiteFooter.tsx are kept identical in both repos,
// except for THIS_SITE below. If you change one site's copy, copy it to the other.

export const THIS_SITE = "pseo" as "main" | "pseo";

export const MAIN_URL = "https://www.avatar-alchemy.com";
export const PSEO_URL = "https://pseo.avatar-alchemy.com";
export const CONTACT_EMAIL = "kenny.swann@avatar-alchemy.com";
export const TRADING_NAME = "Avatar Alchemy";
export const LOCATION = "Somerset, UK";

// The one call to action used everywhere, on both sites.
export const CTA_LABEL = "Book a free AI visibility check";
// Goes to the booking page on the main site (Calendly embed).
export const CTA_PATH = "/book";

/** A link to a page on the main site: relative on the main site, absolute from the pSEO site. */
export const mainHref = (path: string) => (THIS_SITE === "main" ? path : `${MAIN_URL}${path}`);
/** A link to a page on the pSEO site: relative on the pSEO site, absolute from the main site. */
export const pseoHref = (path: string) => (THIS_SITE === "pseo" ? path : `${PSEO_URL}${path}`);

export const CTA_HREF = mainHref(CTA_PATH);

// Second, smaller option: the self-serve audit app.
export const AUDIT_TOOL_LABEL = "Try the free audit tool";
export const AUDIT_TOOL_HREF = "https://audit.avatar-alchemy.com";

export const NAV_LINKS: { label: string; href: string }[] = [
    { label: "Home", href: mainHref("/") },
    { label: "AI Visibility", href: mainHref("/ai-visibility") },
    { label: "Programmatic SEO", href: pseoHref("/") },
    { label: "Video & AI Avatars", href: mainHref("/video") },
    { label: "Pricing", href: mainHref("/pricing") },
    { label: "About", href: mainHref("/#about") },
];

// PRICES: the only place these figures live. Both sites read them from here.
export const PRICES = {
    aiVisibility6: 395, // per month, 6-month minimum, then rolling monthly
    aiVisibility3: 495, // per month, 3-month minimum, then rolling monthly
    pseoBuild: 3000, // one-off
    pseoMonthly: 1000, // per month, rolling monthly
};
export const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

// ABOUT: the same story on both sites (based on the pSEO site's About section).
export const ABOUT = {
    heading: "I'm Kenny Swann.",
    paragraphs: [
        "I run Avatar Alchemy from Somerset and work with businesses wherever they are. You might first talk to one of my sales partners, but every build is planned, built and checked by me.",
        "I build these page systems with AI tools, and I check the data and every claim on the pages myself, because one wrong price or made-up fact on a page costs you more than it gains. The first system I built was for my own tutoring platform, LumenForge, which now runs over 1,100 pages across five sites.",
    ],
};
