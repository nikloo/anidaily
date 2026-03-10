import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 80, paddingBottom: 80, textAlign: 'center', minHeight: '60vh' }}>
        <p style={{ fontFamily: "'Permanent Marker'", fontSize: 120, color: 'var(--red)', opacity: 0.15, lineHeight: 1 }}>404</p>
        <h1 style={{ fontFamily: "'Dela Gothic One'", fontSize: 28, marginTop: -20, marginBottom: 16 }}>PAGE NOT FOUND</h1>
        <p style={{ fontFamily: "'Zen Kaku Gothic New'", fontSize: 14, color: 'var(--cream30)', marginBottom: 8 }}>このページは存在しません</p>
        <p style={{ fontSize: 15, color: 'var(--cream60)', marginBottom: 32 }}>The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '12px 32px', background: 'var(--red)', color: '#fff', fontFamily: "'M PLUS 1p'", fontWeight: 700, fontSize: 12, letterSpacing: '2px', borderRadius: 2 }}>
          BACK TO HOME
        </Link>
      </main>
      <Footer />
    </>
  );
}
