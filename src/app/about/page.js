import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About AniDaily',
  description: 'About AniDaily — AniDaily.net',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <nav className="breadcrumb" style={{ marginBottom: 16 }}>
          <Link href="/">Home</Link> › About AniDaily
        </nav>
        <h1 style={{ fontFamily: "'Dela Gothic One'", fontSize: 28, marginBottom: 24 }}>About AniDaily</h1>
        <div style={{ maxWidth: 760, lineHeight: 1.8, color: 'var(--cream60)', fontSize: 15, whiteSpace: 'pre-line' }}>
          AniDaily is your daily source for anime, manga & TCG news. Founded in 2026, we use AI-powered curation to deliver breaking news, rankings, reviews, and card price tracking — updated every 2 hours, 24/7.\n\nOur mission: Never Miss a Panel. We cover anime announcements, manga chapter releases, TCG set reveals, and viral community moments from across the otaku world.\n\nPowered by advanced AI analysis, our Daily Power Rankings compile buzz data from MAL, AniList, Reddit, and Twitter to give you the most accurate pulse of the anime community.
        </div>
      </main>
      <Footer />
    </>
  );
}
