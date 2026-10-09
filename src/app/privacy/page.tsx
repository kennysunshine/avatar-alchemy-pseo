import type { Metadata } from 'next';
import { CONTACT_EMAIL, SITE_URL } from '@/data/shared-content';
import { SiteNav, SiteFooter } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Privacy | Avatar Alchemy',
  description: 'How Avatar Alchemy AI handles your information on this site.',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const UPDATED = '9 October 2026';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans">
      <SiteNav showBack />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <h1 className="text-4xl font-extrabold text-white mb-2">Privacy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated {UPDATED}</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Who I am</h2>
            <p>
              This site is run by Kenny Sunshine, a sole trader trading as Avatar Alchemy AI, based in Glastonbury, Somerset, UK. I&apos;m responsible for the personal information described here. You can contact me at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">What I collect and why</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="text-white">When you book a call.</span> Bookings are handled by Calendly. I receive your name, email address and anything you write in the booking form, such as your business name, website and the services and areas you cover. I use this to prepare for and hold the call, and to follow up about it. Calendly also processes this information under its own privacy policy.
              </li>
              <li>
                <span className="text-white">When you email me.</span> I keep your message and email address so I can reply and keep a record of our conversation.
              </li>
              <li>
                <span className="text-white">When you visit the site.</span> I use Vercel Web Analytics to count page views. It doesn&apos;t use cookies and doesn&apos;t identify you personally. It gives me totals such as how many people visited a page and which country they were in.
              </li>
            </ul>
            <p className="mt-4">
              The lawful basis is my legitimate interest in responding to enquiries and running the business, or taking steps at your request before we agree any work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">What I don&apos;t do</h2>
            <p>I don&apos;t sell your information, and I don&apos;t add you to a mailing list unless you ask me to.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">How long I keep it</h2>
            <p>
              If we don&apos;t end up working together, I delete enquiry and booking details within 12 months. If we do, I keep records for as long as needed for the work and for tax purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your rights</h2>
            <p>
              Under UK data protection law you can ask for a copy of the information I hold about you, ask me to correct or delete it, or object to how I use it. Email me and I&apos;ll respond within one month. If you&apos;re unhappy with how I&apos;ve handled your information, you can complain to the Information Commissioner&apos;s Office at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ico.org.uk</a>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
