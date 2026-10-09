import { ImageResponse } from 'next/og';

export const alt = 'Avatar Alchemy: programmatic SEO. A useful page for every service and area you cover.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Link-preview image used when the site is shared (Facebook, WhatsApp, LinkedIn).
// Industry pages inherit it.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #070b14 0%, #0d1527 60%, #10213f 100%)',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#60a5fa', letterSpacing: 4 }}>AVATAR ALCHEMY · PROGRAMMATIC SEO</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 30, color: '#94a3b8', marginBottom: 16 }}>Right now, someone is searching for</div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>&ldquo;burst pipe repair in Islington&rdquo;</div>
          <div style={{ display: 'flex', fontSize: 34, color: '#cbd5e1', marginTop: 28 }}>
            I build a page for every service and area you cover, so they find you.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#64748b' }}>pseo.avatar-alchemy.com · Glastonbury, Somerset</div>
      </div>
    ),
    size,
  );
}
