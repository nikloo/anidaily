import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Us — AniDaily.net',
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <nav className="breadcrumb" style={{ marginBottom: 16 }}>
          <Link href="/">Home</Link> › Contact Us
        </nav>
        <h1 style={{ fontFamily: "'Dela Gothic One'", fontSize: 28, marginBottom: 24 }}>Contact Us</h1>
        <div style={{ maxWidth: 760, lineHeight: 1.8, color: 'var(--cream60)', fontSize: 15, whiteSpace: 'pre-line' }}>
          Got a tip? Want to collaborate? Reach out!\n\nEmail: hello@anidaily.net\nTwitter: @AniDailyNet\nDiscord: discord.gg/anidaily\n\nFor advertising inquiries, please email ads@anidaily.net with your proposal.\n\nWe typically respond within 24-48 hours.
        </div>
      </main>
      <Footer />
    </>
  );
}
