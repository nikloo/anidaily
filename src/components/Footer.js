import Link from 'next/link';

const CATEGORIES = ['Anime', 'Manga', 'TCG', 'Viral', 'Reviews', 'Rankings'];
const COMPANY = ['About', 'Contact', 'Advertise', 'Privacy Policy', 'Terms of Service'];
const SOCIALS = ['Twitter / X', 'Discord', 'Instagram', 'YouTube', 'Reddit'];

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)', marginTop:48 }}>
      <div className="halftone-bg container" style={{ padding:'40px 20px' }}>
        {/* Brand Section — hidden on mobile via CSS */}
        <div className="footer-brand" style={{ marginBottom:28 }}>
          <div style={{ display:'flex', alignItems:'center' }}>
            <span style={{ fontFamily:"'Dela Gothic One'", fontSize:22, color:'var(--red)' }}>ANI</span>
            <span style={{ fontFamily:"'Dela Gothic One'", fontSize:22, color:'var(--cream)' }}>DAILY</span>
            <span style={{ fontFamily:"'Dela Gothic One'", fontSize:22, color:'var(--red)', marginLeft:1 }}>.</span>
          </div>
          <p style={{ fontFamily:"'Zen Kaku Gothic New'", fontSize:10, color:'var(--cream30)', marginTop:4, marginBottom:8 }}>パネルを見逃すな</p>
          <p style={{ fontSize:13, color:'var(--cream60)', lineHeight:1.7, maxWidth:400 }}>
            Your daily source for anime, manga & TCG news. Powered by AI. Curated for otaku.
          </p>
        </div>

        {/* 3 Link Columns — always 3 columns, even on mobile */}
        <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40, marginBottom:32 }}>
          <div>
            <h4 style={{ fontFamily:"'M PLUS 1p'", fontSize:10, fontWeight:700, letterSpacing:'2px', color:'var(--red)', marginBottom:12 }}>CATEGORIES</h4>
            {CATEGORIES.map(l => (
              <Link key={l} href={`/${l.toLowerCase()}`} style={{ display:'block', fontSize:13, color:'var(--cream60)', padding:'4px 0' }}>{l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily:"'M PLUS 1p'", fontSize:10, fontWeight:700, letterSpacing:'2px', color:'var(--red)', marginBottom:12 }}>COMPANY</h4>
            {COMPANY.map(l => (
              <Link key={l} href={`/${l.toLowerCase().replace(/ /g,'-')}`} style={{ display:'block', fontSize:13, color:'var(--cream60)', padding:'4px 0' }}>{l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily:"'M PLUS 1p'", fontSize:10, fontWeight:700, letterSpacing:'2px', color:'var(--red)', marginBottom:12 }}>CONNECT</h4>
            {SOCIALS.map(l => (
              <a key={l} href="#" style={{ display:'block', fontSize:13, color:'var(--cream60)', padding:'4px 0' }}>{l}</a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:20, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <span style={{ fontFamily:"'Space Mono'", fontSize:10, color:'var(--cream30)' }}>© 2026 AniDaily.net — Never Miss a Panel</span>
          <div style={{ display:'flex', alignItems:'center', gap:6 }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#2BD46B', animation:'dotBlink 2s infinite' }} />
            <span style={{ fontFamily:"'Space Mono'", fontSize:10, color:'var(--cream30)' }}>AI-Powered • Updated every 2 hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
