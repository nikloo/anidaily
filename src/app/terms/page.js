import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service — AniDaily.net',
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <nav className="breadcrumb" style={{ marginBottom: 16 }}>
          <Link href="/">Home</Link> › Terms of Service
        </nav>
        <h1 style={{ fontFamily: "'Dela Gothic One'", fontSize: 28, marginBottom: 24 }}>Terms of Service</h1>
        <div style={{ maxWidth: 760, lineHeight: 1.8, color: 'var(--cream60)', fontSize: 15, whiteSpace: 'pre-line' }}>
          Last updated: March 2026\n\nBy using AniDaily.net you agree to these terms.\n\nContent: All content is for informational and entertainment purposes. TCG price data is indicative and may not reflect real-time market values.\n\nComments: We reserve the right to moderate or remove comments that are abusive, spam, or off-topic.\n\nCopyright: All original content is © 2026 AniDaily. News sourced from public announcements with proper attribution. If you believe content infringes your copyright, contact hello@anidaily.net.\n\nDisclaimer: AniDaily is not affiliated with any anime studio, manga publisher, or TCG company. All trademarks belong to their respective owners.\n\nLiability: AniDaily is not responsible for decisions made based on our content, including TCG investment decisions.
        </div>
      </main>
      <Footer />
    </>
  );
}
