// SHARED between avatar-alchemy.com and pseo.avatar-alchemy.com. Keep identical in both repos.
import { CONTACT_EMAIL, LOCATION, TRADING_NAME, mainHref } from "./site-links";

export function SiteFooter() {
    return (
        <footer className="bg-[#070b14] py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-3">
                <a href={mainHref("/")} className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/avatar-alchemy-icon.png" alt="" width={32} height={32} className="w-8 h-8" />
                    <span className="font-bold text-white">{TRADING_NAME}</span>
                </a>
                <p className="text-sm text-slate-400">
                    Trading as {TRADING_NAME} · {LOCATION}
                </p>
                <p className="text-sm">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">{CONTACT_EMAIL}</a>
                    <span className="text-slate-600 mx-2">·</span>
                    {/* Each site links to its own privacy page */}
                    <a href="/privacy" className="text-slate-400 hover:text-white">Privacy</a>
                    <span className="text-slate-600 mx-2">·</span>
                    <a href={mainHref("/video")} className="text-slate-500 hover:text-white text-xs">Video &amp; AI Avatars</a>
                </p>
                <p className="text-sm text-slate-600">
                    © {new Date().getFullYear()} {TRADING_NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
