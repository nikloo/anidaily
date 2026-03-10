import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  return {
    title: 'Article Title Here — AniDaily',
    description: 'Read the latest anime, manga & TCG news on AniDaily.',
    openGraph: { type: 'article', images: [{ url: 'https://picsum.photos/seed/article/1200/675' }] },
  };
}

export default function ArticlePage({ params }) {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32 }}>
        <nav className="breadcrumb" style={{ marginBottom: 16 }}>
          <Link href="/">Home</Link> › <Link href="/anime">Anime</Link> › Article
        </nav>

        <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          <article>
            {/* Article Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org", "@type": "NewsArticle",
              headline: "Article Title Here",
              image: "https://picsum.photos/seed/article/1200/675",
              datePublished: new Date().toISOString(),
              author: { "@type": "Organization", name: "AniDaily" },
              publisher: { "@type": "Organization", name: "AniDaily", logo: { "@type": "ImageObject", url: "https://anidaily.net/images/logo.png" } },
            }) }} />

            <img src="https://picsum.photos/seed/article/1200/675" alt="Article" style={{ width: '100%', borderRadius: 4, marginBottom: 20 }} />
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <span className="cat-badge" style={{ background: 'var(--red)' }}>ANIME</span>
              <span style={{ fontFamily: "'Space Mono'", fontSize: 11, color: 'var(--cream30)' }}>March 10, 2026 · 5 min read</span>
            </div>
            <h1 style={{ fontFamily: "'Zen Kaku Gothic New'", fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>
              Article Title — This Will Be Dynamically Generated
            </h1>

            <div style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--cream60)' }}>
              <p style={{ marginBottom: 16 }}>This is where your AI-generated article content will appear. Each article will be created by the Make.com + GPT-4o-mini pipeline and published automatically.</p>

              {/* Ad: In-article after paragraph 2 */}
              <AdSlot size="in-article" style={{ margin: '24px 0' }} />

              <h2 style={{ fontFamily: "'Zen Kaku Gothic New'", fontSize: 22, fontWeight: 700, color: 'var(--cream)', margin: '24px 0 12px' }}>Subheading Here</h2>
              <p style={{ marginBottom: 16 }}>More content here. The AI pipeline will generate 400-800 word articles with proper H2 subheadings, internal links, and SEO keywords.</p>
              <p style={{ marginBottom: 16 }}>Each article includes related article links, social share buttons, and comment sections — all critical for AdSense approval and reducing bounce rate.</p>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 24 }}>
              {['anime-news', 'season-announcement', 'streaming'].map(tag => (
                <span key={tag} style={{ padding: '4px 10px', fontSize: 11, background: 'var(--cream05)', color: 'var(--cream30)', borderRadius: 2, fontFamily: "'Space Mono'" }}>#{tag}</span>
              ))}
            </div>

            <AdSlot size="leaderboard" style={{ marginTop: 32 }} />
          </article>

          {/* Sidebar */}
          <aside>
            <AdSlot size="sidebar" style={{ marginBottom: 16 }} />
            <div className="manga-panel" style={{ background: 'var(--surface)', padding: 20 }}>
              <h3 style={{ fontFamily: "'Dela Gothic One'", fontSize: 13, marginBottom: 16 }}>RELATED ARTICLES</h3>
              {[1,2,3].map(i => (
                <div key={i} style={{ padding: '10px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.4, cursor: 'pointer' }}>Related Article Title #{i}</p>
                  <span style={{ fontFamily: "'Space Mono'", fontSize: 9, color: 'var(--cream30)' }}>{i}h ago</span>
                </div>
              ))}
            </div>
            <AdSlot size="sidebar" style={{ marginTop: 16 }} />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
