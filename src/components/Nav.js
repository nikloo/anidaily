"use client";
import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ANIME', href: '/anime' },
  { label: 'MANGA', href: '/manga' },
  { label: 'TCG', href: '/tcg' },
  { label: 'RANKINGS', href: '/rankings' },
  { label: 'REVIEWS', href: '/reviews' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ position:'sticky', top:0, zIndex:100, background:'rgba(12,12,16,0.92)', backdropFilter:'blur(12px)', borderBottom:'1px solid var(--border)' }}>
      {/* Breaking News Ticker */}
      <div style={{ background:'var(--red)', padding:'5px 0', overflow:'hidden', whiteSpace:'nowrap' }}>
        <div style={{ display:'inline-flex', animation:'tickerScroll 30s linear infinite' }}>
          {[0,1].map(i => (
            <span key={i} style={{ fontSize:11, fontFamily:"'Space Mono',monospace", fontWeight:700, color:'#fff', letterSpacing:'0.5px' }}>
              &nbsp;&nbsp;🔴 LATEST: Daily Power Rankings Updated — Solo Leveling Takes #1 &nbsp;|&nbsp; Pokémon TCG Mythical Island Prices Surging &nbsp;|&nbsp; Frieren S2 Confirmed Fall 2026 &nbsp;|&nbsp; One Piece Ch.1145 Discussion &nbsp;|&nbsp;
            </span>
          ))}
        </div>
      </div>
      {/* Main Nav */}
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:56 }}>
        <Link href="/" aria-label="AniDaily Home" style={{ display:'flex', alignItems:'center', gap:0, flexShrink:0 }}>
          <span style={{ fontFamily:"'Dela Gothic One'", fontSize:22, fontWeight:900, color:'var(--red)' }}>ANI</span>
          <span style={{ fontFamily:"'Dela Gothic One'", fontSize:22, fontWeight:900, color:'var(--cream)' }}>DAILY</span>
          <span style={{ fontFamily:"'Dela Gothic One'", fontSize:22, fontWeight:900, color:'var(--red)', marginLeft:1 }}>.</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-desktop" style={{ display:'flex', alignItems:'center', gap:0 }}>
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} style={{ fontFamily:"'M PLUS 1p'", fontSize:11, fontWeight:700, letterSpacing:'2px', color:'var(--cream60)', padding:'18px 12px', transition:'color .2s' }}>
              {item.label}
            </Link>
          ))}
          <div style={{ width:1, height:20, background:'var(--border)', margin:'0 6px' }} />
          <Link href="/search" style={{ fontSize:16, padding:'8px', color:'var(--cream60)' }}>🔍</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display:'none', background:'none', border:'none', color:'var(--cream)', fontSize:24, cursor:'pointer', padding:8 }}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{
          background:'var(--surface)', borderTop:'1px solid var(--border)',
          padding:'8px 0',
        }}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display:'block', padding:'14px 20px',
                fontFamily:"'M PLUS 1p'", fontSize:12, fontWeight:700,
                letterSpacing:'2px', color:'var(--cream60)',
                borderBottom:'1px solid var(--border)',
                transition:'background .2s',
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/search" onClick={() => setMenuOpen(false)}
            style={{ display:'block', padding:'14px 20px', fontFamily:"'M PLUS 1p'", fontSize:12, fontWeight:700, letterSpacing:'2px', color:'var(--cream60)' }}>
            🔍 SEARCH
          </Link>
        </div>
      )}
    </nav>
  );
}
