// Shared, industry-parameterized content used across every generated landing page.
// Keeping this in code (not JSON) so copy tweaks apply to all industries at once.

export interface Faq {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

// Universal FAQs appended after each industry's own FAQs.
// Each targets a real "People Also Ask" query pattern for FAQPage schema.
export function sharedFaqs(industryName: string): Faq[] {
  return [
    {
      question: `Is programmatic SEO worth it for ${industryName}?`,
      answer: `If your customers search in repeatable patterns — a service, a specialism, or a comparison combined with a location or niche — then yes: each pattern becomes a page type, and each page captures demand that traditional SEO ignores. If your market only searches one or two generic terms, a content-led approach fits better, and we will tell you that on the strategy call.`,
    },
    {
      question: 'How long until we see results?',
      answer: 'Indexation typically starts within days on Next.js edge infrastructure. Meaningful impressions build over 6–12 weeks as Google evaluates the pages, and qualified enquiries generally follow from month 3–6. We report against that curve monthly, so you always know where you are on it.',
    },
    {
      question: 'How much does programmatic SEO cost?',
      answer: 'Our architecture build is a fixed £3,000, then £1,000/month for hosting, monitoring and page expansion. Compare that with the equivalent paid-ads spend for the same volume of high-intent clicks — most clients cover the monthly fee with a single new client.',
    },
    {
      question: 'Will Google penalise us for auto-generated pages?',
      answer: `Not when every page is backed by unique structured data and targets real search intent. Google's scaled-content policy targets thin, duplicated pages built for search engines instead of people — which is precisely what we do not build. Every page we generate says something specific to its query, and we monitor indexation quality as the site scales.`,
    },
    {
      question: 'How many pages do we actually need?',
      answer: 'Fewer than you might think to start. We typically launch with 300–1,000 pages against the strongest query patterns, prove indexation and rankings, then scale toward the full keyword map. Volume follows evidence, not the other way round.',
    },
    {
      question: 'Will programmatic pages cannibalise our existing rankings?',
      answer: 'No — we map your existing rankings first and only build for queries you do not already own. Each page targets a distinct search intent, and canonical tags plus a clean internal-linking hierarchy keep the structure unambiguous to Google.',
    },
    {
      question: 'Do we need to write any content ourselves?',
      answer: 'No. We build the datasets, templates and copy frameworks. We will ask your team for accurate service and specialism details, because factual accuracy is what makes the pages rank and convert — but the production work is ours.',
    },
    {
      question: 'What happens if we stop the monthly plan?',
      answer: 'The pages are yours — they live on your infrastructure and keep working. The monthly plan covers hosting, monitoring, pruning and expansion; if you stop, you keep everything built to date.',
    },
  ];
}

export function processSteps(industryName: string): ProcessStep[] {
  return [
    {
      title: 'Map the keyword space',
      description: `We mine your services, specialisms and locations to build a complete map of the long-tail queries ${industryName} customers actually type — typically 2,000–20,000 keyword permutations traditional SEO would never touch. Every planned page is tied to a real query pattern with measurable intent.`,
    },
    {
      title: 'Build the data layer',
      description: 'Programmatic pages are only as good as the data behind them. We assemble a structured dataset of the facts each page needs — services, specialisms, local details, comparison data — so every page says something specific, not a swapped-out place name.',
    },
    {
      title: 'Engineer the templates',
      description: 'We build page templates in Next.js that render your data server-side, deployed to a subdirectory or subdomain to match your branding. Edge rendering keeps pages fast; clean internal linking and XML sitemaps keep them crawlable.',
    },
    {
      title: 'Publish, monitor, expand',
      description: 'We release pages in controlled batches, watch indexation and rankings in Search Console, prune what underperforms and expand what wins. You get a monthly report tying pages published to impressions to enquiries.',
    },
  ];
}

// Quality safeguards for the "Won't Google penalise this?" section.
export const qualitySafeguards: string[] = [
  'Every page is backed by unique structured data — real service, specialism and local detail, not token-swapped boilerplate.',
  'Every page targets a query with demonstrated search intent — if nobody searches for it, we do not build it.',
  'Pages are released in controlled batches with indexation monitoring, so quality signals stay healthy as the site scales.',
  'Underperforming pages are pruned or consolidated — we would rather run 800 pages that rank than 10,000 that do not.',
];

// The one real, verifiable case study — shown on every industry page.
// Update the metric/description as GSC data matures (impressions, clicks, enquiries).
export const realCaseStudy = {
  badge: 'Real project',
  title: 'LumenForge — GCSE AI Tutoring Platform',
  metric: '1,100+',
  description:
    'programmatic landing pages designed, built and deployed across a five-site education ecosystem — subject × level × location × exam-board matrices on Next.js — with the first pages entering Google’s index within two weeks of launch.',
};

export interface ComparisonRow {
  label: string;
  pseo: string;
  traditional: string;
  paidAds: string;
  pseoWins: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { label: 'Cost per lead over time', pseo: 'Falls as pages compound', traditional: 'Falls slowly', paidAds: 'Flat or rising', pseoWins: true },
  { label: 'Time to first results', pseo: '6–12 weeks', traditional: '6–12 months', paidAds: 'Days', pseoWins: false },
  { label: 'Scales with', pseo: 'Data & templates', traditional: 'Writer hours', paidAds: 'Budget', pseoWins: true },
  { label: 'Stops when you stop paying', pseo: 'No — pages keep ranking', traditional: 'No', paidAds: 'Yes, instantly', pseoWins: true },
  { label: 'Long-tail coverage', pseo: 'Complete', traditional: 'Selective', paidAds: 'Only what you bid on', pseoWins: true },
];
