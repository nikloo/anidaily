import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy — AniDaily.net',
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <nav className="breadcrumb" style={{ marginBottom: 16 }}>
          <Link href="/">Home</Link> › Privacy Policy
        </nav>
        <h1 style={{ fontFamily: "'Dela Gothic One'", fontSize: 28, marginBottom: 24 }}>Privacy Policy</h1>
        <div style={{ maxWidth: 760, lineHeight: 1.8, color: 'var(--cream60)', fontSize: 15, whiteSpace: 'pre-line' }}>
          Last updated: March 2026\n\nAniDaily.net respects your privacy. This policy explains how we collect, use, and protect your information.\n\nInformation We Collect: We may collect email addresses voluntarily provided for our newsletter, anonymous analytics data via Google Analytics, and cookie data for site functionality and advertising.\n\nHow We Use Information: To deliver newsletter content, to improve site experience, and to serve relevant advertisements via Google AdSense.\n\nThird-Party Services: We use Google Analytics, Google AdSense, and Cloudflare. Each has their own privacy policies.\n\nYour Rights: You may unsubscribe from our newsletter at any time. You may request deletion of your data by contacting hello@anidaily.net.\n\nContact: For privacy concerns, email hello@anidaily.net.
        </div>
      </main>
      <Footer />
    </>
  );
}
