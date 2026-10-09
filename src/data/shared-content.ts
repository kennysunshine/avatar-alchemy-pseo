// Shared, industry-parameterised content used across every generated landing page.
// Kept in code (not JSON) so copy tweaks apply to all industries at once.
//
// ACCURACY RULE: nothing in this file may claim client results, statistics or
// guarantees that cannot be backed by evidence. Illustrative examples must be
// labelled as illustrative where they are shown.

export const BOOKING_URL = 'https://calendly.com/kennysunshine-sun/30min';
export const SITE_URL = 'https://pseo.avatar-alchemy.com';
export const CONTACT_EMAIL = 'kenny.swann@avatar-alchemy.com';

export const PRICING = {
  build: 3000,
  monthly: 1000,
};


export interface Faq {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

// Universal FAQs appended after each industry's own FAQs.
export function sharedFaqs(industryName: string): Faq[] {
  return [
    {
      question: `Is programmatic SEO worth it for ${industryName}?`,
      answer: `It is if your customers search in repeatable patterns: a service plus a location, a specialism plus a type of client, or a product plus a comparison. Each pattern becomes a set of pages. If your market only searches one or two generic terms, a few well-written pages will do the job better, and I'll tell you that on the call.`,
    },
    {
      question: 'How long until we see results?',
      answer: `The first pages can appear in Google within days to a couple of weeks of launch. Impressions usually build over the first 6 to 12 weeks as Google tests the pages, and enquiries tend to follow from around month 3 onwards. That depends on your market and competition, so I report against it monthly and you can see exactly where you are.`,
    },
    {
      question: 'How much does it cost?',
      answer: `£3,000 fixed for the build, then £1,000 a month for hosting, monitoring and adding pages. To judge whether that's worth it, work out how many extra customers a month would cover £1,000 for your business. The calculator on this page does that for you.`,
    },
    {
      question: 'Will Google penalise us for auto-generated pages?',
      answer: `Not when every page is genuinely useful. Google's scaled-content policy targets near-identical pages made for search engines instead of people, the kind where only the town name changes. Every page I build is backed by real details for that service and place, targets a search people actually make, and gets monitored after launch.`,
    },
    {
      question: 'How many pages do we need?',
      answer: `Fewer than you'd think to start. Most builds launch with somewhere between 300 and 1,000 pages covering the strongest searches, prove they get indexed and found, then grow from there. Volume follows evidence.`,
    },
    {
      question: 'Will the new pages compete with our existing ones?',
      answer: `No. I check what you already rank for first and only build pages for searches you don't already own. Each page targets a different search, and the structure tells Google clearly which page answers what.`,
    },
    {
      question: 'Do we need to write anything?',
      answer: `No. I build the data, the templates and the copy. I'll ask you for accurate details about your services, areas and prices, because accurate pages are what rank and convert. You check and approve the templates before anything goes live.`,
    },
    {
      question: 'What happens if we stop the monthly plan?',
      answer: `You keep every page built so far. The monthly plan covers hosting, monitoring, pruning and adding pages. If you stop, I hand everything over so it can keep running on your own hosting.`,
    },
  ];
}

export function processSteps(industryName: string): ProcessStep[] {
  return [
    {
      title: 'Map the searches',
      description: `I list every service, specialism and area you cover and check which combinations people actually search for. You get a written map of the pages worth building for your ${industryName.toLowerCase()} business before any build starts.`,
    },
    {
      title: 'Build the data',
      description: `Each page needs real facts behind it: the service, the area, your details for that area, useful local information. I put that into a structured dataset, so every page says something specific instead of swapping the town name.`,
    },
    {
      title: 'Build the templates',
      description: `I design the page templates and you approve them. The pages go on a subfolder or subdomain of your site in your branding, load fast on phones, and link to each other so Google can find them all.`,
    },
    {
      title: 'Launch, measure, grow',
      description: `Pages go live in batches. I watch which ones Google indexes and which get seen and clicked in Search Console, prune what doesn't work and add more of what does. You get a monthly report in plain English.`,
    },
  ];
}

// "What you get" deliverables list.
export const deliverables: { title: string; detail: string }[] = [
  {
    title: 'A search map for your business',
    detail: 'Every service-and-place combination worth a page, with the searches behind them. Yours to keep.',
  },
  {
    title: '300–1,000 pages at launch',
    detail: 'Built against the strongest searches first, in your branding, on your domain.',
  },
  {
    title: 'Templates you approve',
    detail: 'Nothing goes live until you have checked how the pages look and what they say.',
  },
  {
    title: 'Hosting and monitoring',
    detail: 'Fast hosting, Search Console set up, and indexing problems caught and fixed.',
  },
  {
    title: 'New pages every month',
    detail: 'More services, areas or page types added based on what is working.',
  },
  {
    title: 'A monthly report in plain English',
    detail: 'Pages live, how often they appeared in Google, clicks, and enquiries where you can track them.',
  },
];

// Things I deliberately do not claim.
export const wontPromise: string[] = [
  'Number-one rankings by a set date. Nobody controls Google, and anyone who promises that is guessing.',
  'A set number of leads. That depends on your market, your prices and how you answer the phone.',
  'Made-up case studies or results. When a client build has real numbers, they will go here.',
];

// Quality safeguards for the "Won't Google penalise this?" section.
export const qualitySafeguards: string[] = [
  'Every page is backed by real details for that service and place, not a template with the town name swapped.',
  'Every page targets a search people actually make. If nobody searches for it, I do not build it.',
  'Pages go live in batches and indexing is monitored, so problems get caught early.',
  'Pages that do not perform are cut or merged. 800 pages that get found beat 10,000 that do not.',
];

// Builds for my own ventures and partners, shown in the "Built so far" section.
// Only entries with show: true appear on the site. Before switching one on:
//   - the site must be live, with no placeholder forms or content
//   - the partner must be happy to be named
//   - metric = the real page count; the grid must match what was actually built
// Add Search Console numbers (impressions, clicks) only once you can show them.
export interface ExampleBuild {
  show: boolean;
  title: string;
  relationship: string; // be open about whose site it is
  url?: string;
  metric: string;
  description: string;
}

export const exampleBuilds: ExampleBuild[] = [
  {
    show: true,
    title: 'LumenForge: GCSE AI tutoring platform',
    relationship: 'My own venture',
    url: 'https://lumen-forge.co.uk',
    metric: '1,100+',
    description: 'pages across five education sites, covering subject × level × location × exam board.',
  },
  {
    // Switch on once the placeholder contact form is fixed.
    show: false,
    title: 'The Shiftpoint: addiction recovery clinic',
    relationship: 'Partner build',
    url: 'https://www.theshiftpoint.co.uk',
    metric: '42',
    description: 'pages: 6 substances × 7 West London areas, each with its own page.',
  },
  {
    show: false,
    title: 'Batch Foundry: AI audit and verification',
    relationship: 'My own venture',
    metric: 'TODO',
    description: 'TODO: real page count and grid.',
  },
  {
    show: false,
    title: 'Practical Reptile Keeping',
    relationship: 'Partner build',
    metric: 'TODO',
    description: 'TODO: real page count and grid, once live and agreed.',
  },
  {
    show: false,
    title: 'Blockchain Academy',
    relationship: 'Partner build',
    url: 'https://blockchainacademy.info',
    metric: 'TODO',
    description: 'TODO: real page count and grid, once live and agreed.',
  },
];

export interface ComparisonRow {
  label: string;
  pseo: string;
  traditional: string;
  paidAds: string;
  pseoWins: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { label: 'What you pay for', pseo: 'Pages you keep', traditional: 'Writing and link building', paidAds: 'Every click', pseoWins: true },
  { label: 'First signs of results', pseo: 'Usually 6–12 weeks', traditional: 'Usually months', paidAds: 'Days', pseoWins: false },
  { label: 'Grows with', pseo: 'Data and templates', traditional: 'Writer hours', paidAds: 'Budget', pseoWins: true },
  { label: 'When you stop paying', pseo: 'Pages stay live', traditional: 'Pages stay live', paidAds: 'Traffic stops', pseoWins: true },
  { label: 'Long-tail searches covered', pseo: 'Every combination you serve', traditional: 'A selection', paidAds: 'Only what you bid on', pseoWins: true },
];
