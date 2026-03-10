import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata = {
  title: 'MANGA News — Latest Manga Updates',
  description: 'Breaking manga news, chapter releases, author updates and serialization announcements.',
  openGraph: { title: 'MANGA News | AniDaily', description: 'Breaking manga news, chapter releases, author updates and serialization announcements.' },
};

const DUMMY = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Manga News Story #${i + 1} — Breaking Update Today`,
  date: `${i + 1}h ago`,
  img: `https://picsum.photos/seed/manga${i}/600/400`,
  read: `${Math.floor(Math.random() * 5) + 2} min`,
}));

export default function MangaPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32 }}>
        {/* Breadcrumb */}
        <nav className="breadcrumb" style={{ marginBottom: 16 }}>
          <Link href="/">Home</Link> › <span style={{ color: 'var(--manga-blue)' }}>MANGA</span>
        </nav>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <div className="section-bar" style={{ background: 'var(--manga-blue)' }} />
          <h1 className="section-title">MANGA NEWS</h1>
          <span className="section-jp">マンガ</span>
        </div>

        {/* Ad: Top leaderboard */}
        <AdSlot size="leaderboard" style={{ marginBottom: 24 }} />

        {/* Grid */}
        <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          <div className="news-grid">
            {DUMMY.map((item, i) => (
              <article key={item.id} className="manga-panel speed-hover" style={{ background: 'var(--surface)', overflow: 'hidden', cursor: 'pointer', animation: `fadeUp .4s ease ${i * 0.06}s both` }}>
                <div style={{ position: 'relative', paddingTop: '60%' }}>
                  <img src={item.img} alt={item.title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(12,12,16,0.8)', padding: '2px 6px', borderRadius: 2 }}>
                    <span style={{ fontFamily: "'Space Mono'", fontSize: 9, color: 'var(--cream60)' }}>📖 {item.read}</span>
                  </div>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <h3 style={{ fontFamily: "'Zen Kaku Gothic New'", fontSize: 14, fontWeight: 700, lineHeight: 1.45, marginBottom: 8 }}>{item.title}</h3>
                  <span style={{ fontFamily: "'Space Mono'", fontSize: 10, color: 'var(--cream30)' }}>{item.date}</span>
                </div>
              </article>
            ))}

            {/* Ad: In-feed after 4th card */}
            <div style={{ gridColumn: 'span 2' }}><AdSlot size="in-article" /></div>
          </div>

          {/* Sidebar */}
          <aside>
            <AdSlot size="sidebar" style={{ marginBottom: 16 }} />
            <div className="manga-panel" style={{ background: 'var(--surface)', padding: 20 }}>
              <h3 style={{ fontFamily: "'Dela Gothic One'", fontSize: 13, letterSpacing: '1px', marginBottom: 16 }}>NEVER MISS A PANEL</h3>
              <p style={{ fontSize: 12, color: 'var(--cream60)', lineHeight: 1.6, marginBottom: 14 }}>Get daily manga news in your inbox.</p>
              <div style={{ display: 'flex', gap: 6 }}>
                <input type="email" placeholder="your@email.com" style={{ flex: 1, background: 'var(--cream05)', border: '1px solid var(--border)', borderRadius: 2, padding: '8px 10px', fontSize: 12, color: 'var(--cream)', fontFamily: "'Space Mono'", outline: 'none' }} />
                <button style={{ background: 'var(--red)', border: 'none', borderRadius: 2, padding: '8px 14px', fontSize: 11, fontFamily: "'M PLUS 1p'", fontWeight: 700, color: '#fff', cursor: 'pointer' }}>JOIN</button>
              </div>
            </div>
            <AdSlot size="sidebar" style={{ marginTop: 16 }} />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
