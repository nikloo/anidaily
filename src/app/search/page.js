import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = { title: 'Search', description: 'Search AniDaily for anime, manga & TCG news.' };

export default function SearchPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 48, paddingBottom: 48, textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontFamily: "'Dela Gothic One'", fontSize: 28, marginBottom: 24 }}>🔍 SEARCH</h1>
        <input type="search" placeholder="Search anime, manga, TCG news..." style={{ width: '100%', maxWidth: 600, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 4, padding: '14px 18px', fontSize: 16, color: 'var(--cream)', fontFamily: "'Outfit'", outline: 'none' }} />
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--cream30)' }}>Search powered by AI — coming soon with Make.com integration</p>
      </main>
      <Footer />
    </>
  );
}
