import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata = {
  title: 'Reviews — Anime & Manga Reviews',
  description: 'In-depth anime and manga reviews with scores, analysis, and recommendations from AniDaily.',
};

const REVIEWS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1, title: ['Frieren S1 Review','Solo Leveling S2 Review','Dandadan Review','Blue Lock S2 Review','Sakamoto Days Review','Dragon Ball Daima Review'][i],
  score: [9.2, 8.8, 9.0, 8.5, 8.7, 7.9][i],
  img: `https://picsum.photos/seed/rev${i}/600/400`,
  excerpt: 'A comprehensive look at the latest season with our editorial verdict.',
}));

export default function ReviewsPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32 }}>
        <nav className="breadcrumb" style={{ marginBottom: 16 }}><Link href="/">Home</Link> › Reviews</nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <div className="section-bar" style={{ background: '#2BD46B' }} />
          <h1 className="section-title">REVIEWS</h1>
          <span className="section-jp">レビュー</span>
        </div>
        <AdSlot size="leaderboard" style={{ marginBottom: 24 }} />
        <div className="news-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {REVIEWS.map((r, i) => (
            <article key={r.id} className="manga-panel speed-hover" style={{ background: 'var(--surface)', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ position: 'relative', paddingTop: '60%' }}>
                <img src={r.img} alt={r.title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(12,12,16,0.9)', padding: '6px 10px', borderRadius: 4 }}>
                  <span style={{ fontFamily: "'Dela Gothic One'", fontSize: 18, color: r.score >= 9 ? '#FFD700' : '#2BD46B' }}>{r.score}</span>
                  <span style={{ fontSize: 11, color: 'var(--cream30)' }}>/10</span>
                </div>
              </div>
              <div style={{ padding: '14px' }}>
                <h3 style={{ fontFamily: "'Zen Kaku Gothic New'", fontSize: 15, fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>{r.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--cream60)', lineHeight: 1.5 }}>{r.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
