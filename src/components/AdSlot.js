/**
 * Ad Slot Placeholder — replace with real AdSense code after approval.
 * Sizes: 'banner' (728x90), 'sidebar' (300x250), 'mobile' (320x100), 'in-article' (full-width)
 * 
 * HOW TO ADD REAL ADS LATER:
 * 1. Get approved by Google AdSense
 * 2. Replace the placeholder content below with your AdSense <ins> tag
 * 3. Add the AdSense script to layout.js <head>
 */
const SIZES = {
  banner: { width: '100%', height: 90, label: 'AD · 728×90' },
  sidebar: { width: '100%', height: 250, label: 'AD · 300×250' },
  mobile: { width: '100%', height: 100, label: 'AD · 320×100' },
  'in-article': { width: '100%', height: 120, label: 'AD · IN-ARTICLE' },
  leaderboard: { width: '100%', height: 90, label: 'AD · LEADERBOARD' },
};

export default function AdSlot({ size = 'banner', style = {} }) {
  const s = SIZES[size] || SIZES.banner;
  return (
    <div className="ad-slot" style={{ width: s.width, height: s.height, ...style }}>
      {/* PLACEHOLDER — anime poster banners */}
      <img
        src={`https://picsum.photos/seed/ad-${size}/728/250`}
        alt="Advertisement"
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
      />
      <span className="ad-slot-label">{s.label}</span>
    </div>
  );
}
