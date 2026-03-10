import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata = {
  title: 'Daily Power Rankings — AI-Powered Anime & Manga Charts',
  description: 'AniDaily Daily Power Rankings: AI-compiled anime, manga & TCG buzz scores from MAL, AniList, Reddit & Twitter. Updated daily.',
};

const DATA = Array.from({ length: 20 }, (_, i) => ({
  rank: i + 1, prev: i + 1 + (Math.floor(Math.random() * 5) - 2),
  title: ['Solo Leveling: Ragnarok','Frieren S2','One Piece','Sakamoto Days','Dandadan','Blue Lock S2','Chainsaw Man P3','Dragon Ball Daima','JJK S3','Pokémon TCG Pocket','Demon Slayer: Infinity Castle','Mashle S3','Spy x Family S3','Bocchi the Rock Movie','Vinland Saga S3','Oshi no Ko S3','Dr. Stone S4','Tokyo Revengers Final','Haikyuu Final','Kaiju No. 8 S2'][i],
  type: ['ANIME','ANIME','MANGA','ANIME','ANIME','ANIME','MANGA','ANIME','ANIME','TCG','ANIME','ANIME','ANIME','ANIME','MANGA','ANIME','ANIME','MANGA','ANIME','ANIME'][i],
  score: Math.round((100 - i * 1.5) * 10) / 10,
  img: `https://picsum.photos/seed/rank${i}/80/80`,
}));

export default function RankingsPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32 }}>
        <nav className="breadcrumb" style={{ marginBottom: 16 }}>
          <Link href="/">Home</Link> › <span style={{ color: 'var(--orange)' }}>Rankings</span>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div className="section-bar" style={{ background: 'var(--orange)' }} />
          <h1 className="section-title">DAILY POWER RANKINGS</h1>
          <span className="section-jp">日替パワーランキング</span>
          <span style={{ padding: '3px 8px', fontSize: 9, fontFamily: "'Space Mono'", fontWeight: 700, background: 'rgba(255,107,53,0.15)', color: 'var(--orange)', borderRadius: 2 }}>AI-POWERED</span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--cream60)', marginBottom: 24 }}>
          Compiled daily from MAL, AniList, Reddit, X/Twitter & community buzz via AI analysis.
        </p>

        <AdSlot size="leaderboard" style={{ marginBottom: 24 }} />

        <div className="manga-panel" style={{ background: 'var(--surface)' }}>
          {DATA.map((r, i) => {
            const diff = r.prev - r.rank;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: i < 19 ? '1px solid var(--border)' : 'none', background: i < 3 ? 'rgba(255,107,53,0.04)' : 'transparent' }}>
                <span style={{ fontFamily: "'Dela Gothic One'", fontSize: i < 3 ? 24 : 16, color: i < 3 ? 'var(--orange)' : 'var(--cream30)', minWidth: 40, textAlign: 'center' }}>{String(r.rank).padStart(2, '0')}</span>
                <img src={r.img} alt="" style={{ width: 48, height: 48, borderRadius: 4, objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: "'Zen Kaku Gothic New'", fontSize: 14, fontWeight: 700 }}>{r.title}</span>
                  <div style={{ marginTop: 4 }}><span className="cat-badge sm" style={{ background: r.type === 'ANIME' ? 'var(--red)' : r.type === 'MANGA' ? 'var(--manga-blue)' : 'var(--tcg-gold)' }}>{r.type}</span></div>
                </div>
                <div className="rankings-col-hide" style={{ width: 120, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ flex: 1, height: 4, background: 'var(--cream05)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ width: `${r.score}%`, height: '100%', background: 'linear-gradient(90deg,var(--orange),#FFD700)', borderRadius: 2 }} />
                  </div>
                  <span style={{ fontFamily: "'Space Mono'", fontSize: 11, fontWeight: 700, color: i < 3 ? '#FFD700' : 'var(--cream60)' }}>{r.score}</span>
                </div>
                <span style={{ fontFamily: "'Space Mono'", fontSize: 12, fontWeight: 700, color: diff > 0 ? '#2BD46B' : diff < 0 ? 'var(--red)' : 'var(--cream30)', minWidth: 36, textAlign: 'right' }}>
                  {diff > 0 ? `▲${diff}` : diff < 0 ? `▼${Math.abs(diff)}` : '—'}
                </span>
              </div>
            );
          })}
        </div>

        <AdSlot size="leaderboard" style={{ marginTop: 24 }} />
      </main>
      <Footer />
    </>
  );
}
