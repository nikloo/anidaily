"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

/* ── Dummy Data (replace with API/CMS later) ── */
const HERO = [
  { id:1, title:"One Piece Final Saga: Oda Confirms 3 More Years", cat:"MANGA", tag:"BREAKING", date:"2h ago", img:"https://picsum.photos/seed/op1/1200/675", excerpt:"Eiichiro Oda revealed in a special Jump Festa interview that the legendary manga series will continue until 2029." },
  { id:2, title:"Frieren Season 2 Release Date Officially Announced", cat:"ANIME", tag:"HOT", date:"4h ago", img:"https://picsum.photos/seed/fr2/1200/675", excerpt:"Madhouse confirms the continuation with returning staff and expanded episode count." },
  { id:3, title:"Pokémon TCG Pocket: Mythical Island Breaks Records", cat:"TCG", tag:"TRENDING", date:"6h ago", img:"https://picsum.photos/seed/pk3/1200/675", excerpt:"The newest expansion featuring Mew and Celebi variants is the most anticipated set of 2026." },
  { id:4, title:"Chainsaw Man Part 3 — Fujimoto Teases New Arc", cat:"MANGA", tag:"EXCLUSIVE", date:"8h ago", img:"https://picsum.photos/seed/cs4/1200/675", excerpt:"Tatsuki Fujimoto drops cryptic hints about the next chapter in Denji's story." },
];

const NEWS = [
  { id:5, title:"Solo Leveling S2 Breaks Crunchyroll Record", cat:"ANIME", date:"1h", img:"https://picsum.photos/seed/sl5/600/400", read:"3 min" },
  { id:6, title:"Blue Lock Movie Surpasses ¥10 Billion", cat:"ANIME", date:"3h", img:"https://picsum.photos/seed/bl6/600/400", read:"4 min" },
  { id:7, title:"One Piece TCG OP-10 Full Card List & Meta", cat:"TCG", date:"5h", img:"https://picsum.photos/seed/op7/600/400", read:"6 min" },
  { id:8, title:"Dandadan OVA Episode Confirmed for Summer", cat:"ANIME", date:"7h", img:"https://picsum.photos/seed/dd8/600/400", read:"2 min" },
  { id:9, title:"Jujutsu Kaisen: Akutami New Oneshot Drops", cat:"MANGA", date:"9h", img:"https://picsum.photos/seed/jk9/600/400", read:"5 min" },
  { id:10, title:"Yu-Gi-Oh New Ban List Shakes Up Meta", cat:"TCG", date:"11h", img:"https://picsum.photos/seed/yg10/600/400", read:"4 min" },
];

const RANKINGS = [
  { rank:1, prev:2, title:"Solo Leveling: Ragnarok", type:"ANIME", score:98.4, img:"https://picsum.photos/seed/r1/80/80" },
  { rank:2, prev:1, title:"Frieren: Beyond Journey\'s End", type:"ANIME", score:97.1, img:"https://picsum.photos/seed/r2/80/80" },
  { rank:3, prev:5, title:"One Piece (Egghead Arc)", type:"MANGA", score:96.8, img:"https://picsum.photos/seed/r3/80/80" },
  { rank:4, prev:3, title:"Sakamoto Days", type:"ANIME", score:95.2, img:"https://picsum.photos/seed/r4/80/80" },
  { rank:5, prev:4, title:"Dandadan", type:"ANIME", score:94.7, img:"https://picsum.photos/seed/r5/80/80" },
];

const TRENDING = [
  { rank:1, title:"Frieren S2 trailer drops", cat:"ANIME" },
  { rank:2, title:"One Piece ch.1145 spoilers", cat:"MANGA" },
  { rank:3, title:"Pokémon Mythical Island pulls", cat:"TCG" },
  { rank:4, title:"Solo Leveling Arise collab", cat:"ANIME" },
  { rank:5, title:"Chainsaw Man Part 3 leaks", cat:"MANGA" },
  { rank:6, title:"Gear 5 Luffy alt art price", cat:"TCG" },
  { rank:7, title:"Blue Lock movie review", cat:"ANIME" },
  { rank:8, title:"Dandadan OVA confirmed", cat:"ANIME" },
];

const TCG_CARDS = [
  { name:"Gear 5 Luffy (Alt Art)", price:"$285", change:"+12.4%", up:true },
  { name:"Mew ex SAR", price:"$142", change:"+8.7%", up:true },
  { name:"Ash Blossom QCR", price:"$98", change:"-3.2%", up:false },
];

const CAT_COLORS = { ANIME:"var(--red)", MANGA:"var(--manga-blue)", TCG:"var(--tcg-gold)", VIRAL:"var(--viral-purple)" };

const CatBadge = ({ cat, sm }) => (
  <span className={`cat-badge${sm ? " sm" : ""}`} style={{ background:CAT_COLORS[cat] || "var(--red)" }}>{cat}</span>
);

/* ── Hero Carousel ── */
function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i+1) % HERO.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  const a = HERO[idx];
  return (
    <section className="manga-panel" style={{ position:'relative', overflow:'hidden', background:'var(--surface)' }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div key={idx} style={{ position:'absolute', inset:0, backgroundImage:`url(${a.img})`, backgroundSize:'cover', backgroundPosition:'center', animation:'heroSlide .6s ease both' }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right,rgba(12,12,16,0.95),rgba(12,12,16,0.7) 50%,rgba(12,12,16,0.3))' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(12,12,16,0.9),transparent 40%)' }} />
      </div>
      <div className="hero-pad" style={{ position:'relative', zIndex:2, maxWidth:1240, margin:'0 auto', padding:'60px 24px 48px', minHeight:420, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
        <div style={{ display:'flex', gap:8, marginBottom:12, alignItems:'center' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'3px 8px', fontSize:9, fontFamily:"'Space Mono'", fontWeight:700, border:'1px solid var(--red)', color:'var(--red)', borderRadius:2 }}>
            <span style={{ width:5, height:5, borderRadius:'50%', background:'var(--red)', animation:'dotBlink 1.2s infinite' }} />{a.tag}
          </span>
          <CatBadge cat={a.cat} sm />
          <span style={{ fontFamily:"'Space Mono'", fontSize:11, color:'var(--cream30)' }}>{a.date}</span>
        </div>
        <h1 key={idx} style={{ fontFamily:"'Zen Kaku Gothic New'", fontSize:'clamp(24px,3.5vw,42px)', fontWeight:700, lineHeight:1.25, maxWidth:680, marginBottom:12, animation:'fadeUp .5s ease both' }}>{a.title}</h1>
        <p className="hero-excerpt" style={{ fontSize:15, color:'var(--cream60)', maxWidth:560, lineHeight:1.6, animation:'fadeIn .6s ease .2s both' }}>{a.excerpt}</p>
        <div style={{ display:'flex', gap:8, marginTop:24, alignItems:'center' }}>
          {HERO.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{ width:i===idx?28:8, height:8, borderRadius:4, background:i===idx?'var(--red)':'var(--cream10)', border:'none', cursor:'pointer', transition:'all .3s' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── News Card ── */
function NewsCard({ item, i }) {
  return (
    <article className="manga-panel speed-hover" style={{ background:'var(--surface)', overflow:'hidden', cursor:'pointer', transition:'transform .2s', animation:`fadeUp .4s ease ${i*0.06}s both` }}>
      <Link href={`/${item.id}`}>
        <div style={{ position:'relative', paddingTop:'60%', overflow:'hidden' }}>
          <img src={item.img} alt={item.title} loading="lazy" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
          <div style={{ position:'absolute', top:8, left:8 }}><CatBadge cat={item.cat} sm /></div>
          <div style={{ position:'absolute', bottom:8, right:8, background:'rgba(12,12,16,0.8)', padding:'2px 6px', borderRadius:2 }}>
            <span style={{ fontFamily:"'Space Mono'", fontSize:9, color:'var(--cream60)' }}>📖 {item.read}</span>
          </div>
        </div>
        <div style={{ padding:'12px 14px 14px' }}>
          <div className="breadcrumb" style={{ marginBottom:6 }}>Home › {item.cat.charAt(0)+item.cat.slice(1).toLowerCase()} › News</div>
          <h3 style={{ fontFamily:"'Zen Kaku Gothic New'", fontSize:14, fontWeight:700, lineHeight:1.45, marginBottom:8 }}>{item.title}</h3>
          <span style={{ fontFamily:"'Space Mono'", fontSize:10, color:'var(--cream30)' }}>{item.date} ago</span>
        </div>
      </Link>
    </article>
  );
}

/* ── Main Homepage ── */
export default function HomePage() {
  const [catFilter, setCatFilter] = useState('ALL');
  const CATS = ['ALL','ANIME','MANGA','TCG','VIRAL'];
  const filtered = catFilter === 'ALL' ? NEWS : NEWS.filter(n => n.cat === catFilter);

  return (
    <>
      <Nav />
      <HeroCarousel />

      {/* Ad: Leaderboard below hero */}
      <div className="container" style={{ marginTop:16 }}>
        <AdSlot size="leaderboard" />
      </div>

      <main className="container" style={{ paddingTop:24 }}>
        {/* Section Header + Filter */}
        <div className="section-header-flex" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div className="section-bar" style={{ background:'var(--red)' }} />
            <h2 className="section-title">LATEST NEWS</h2>
            <span className="section-jp">最新ニュース</span>
          </div>
          <div className="filter-tabs" style={{ display:'flex', gap:4 }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setCatFilter(c)} style={{
                padding:'5px 12px', fontSize:10, fontFamily:"'M PLUS 1p'", fontWeight:700, letterSpacing:'1.5px',
                border:'1px solid', borderColor:catFilter===c?(CAT_COLORS[c]||'var(--red)'):'var(--border)',
                background:catFilter===c?(CAT_COLORS[c]||'var(--red)'):'transparent',
                color:catFilter===c?'#fff':'var(--cream30)', borderRadius:2, cursor:'pointer',
              }}>{c}</button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="main-grid" style={{ display:'grid', gridTemplateColumns:'1fr 300px', gap:24 }}>
          {/* News */}
          <div>
            <div className="news-grid">
              {filtered.map((item, i) => <NewsCard key={item.id} item={item} i={i} />)}
            </div>
            {/* Ad: In-article */}
            <div style={{ marginTop:16 }}><AdSlot size="in-article" /></div>
          </div>

          {/* Sidebar */}
          <aside>
            {/* Ad: Sidebar top */}
            <AdSlot size="sidebar" style={{ marginBottom:16 }} />

            {/* Trending */}
            <div className="manga-panel" style={{ background:'var(--surface)', padding:20 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <span style={{ fontFamily:"'Dela Gothic One'", fontSize:14, color:'var(--red)' }}>🔥</span>
                <h3 style={{ fontFamily:"'Dela Gothic One'", fontSize:13, letterSpacing:'1px' }}>TRENDING NOW</h3>
              </div>
              {TRENDING.map((t, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 0', borderBottom:i<TRENDING.length-1?'1px solid var(--border)':'none', cursor:'pointer' }}>
                  <span style={{ fontFamily:"'Space Mono'", fontSize:18, fontWeight:700, minWidth:28, color:i<3?'var(--red)':'var(--cream30)' }}>{String(t.rank).padStart(2,'0')}</span>
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:12.5, fontWeight:600, lineHeight:1.4 }}>{t.title}</p>
                    <CatBadge cat={t.cat} sm />
                  </div>
                </div>
              ))}
            </div>

            {/* TCG Hot Cards */}
            <div className="manga-panel" style={{ background:'var(--surface)', padding:20, marginTop:16 }}>
              <h3 style={{ fontFamily:"'Dela Gothic One'", fontSize:13, letterSpacing:'1px', marginBottom:16 }}>🃏 TCG HOT CARDS</h3>
              {TCG_CARDS.map((c, i) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:i<TCG_CARDS.length-1?'1px solid var(--border)':'none' }}>
                  <span style={{ fontSize:12, fontWeight:600 }}>{c.name}</span>
                  <div style={{ textAlign:'right' }}>
                    <span style={{ fontFamily:"'Space Mono'", fontSize:13, fontWeight:700 }}>{c.price}</span>
                    <br/>
                    <span style={{ fontFamily:"'Space Mono'", fontSize:10, fontWeight:700, color:c.up?'#2BD46B':'var(--red)' }}>{c.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="manga-panel" style={{ background:'linear-gradient(135deg,rgba(212,43,43,0.08),var(--surface))', padding:20, marginTop:16 }}>
              <h3 style={{ fontFamily:"'Dela Gothic One'", fontSize:14, marginBottom:6 }}>NEVER MISS A PANEL</h3>
              <p style={{ fontFamily:"'Zen Kaku Gothic New'", fontSize:10, color:'var(--cream30)', marginBottom:4 }}>パネルを見逃すな</p>
              <p style={{ fontSize:12, color:'var(--cream60)', lineHeight:1.6, marginBottom:14 }}>Daily anime, manga & TCG news to your inbox. Free.</p>
              <div style={{ display:'flex', gap:6 }}>
                <input type="email" placeholder="your@email.com" style={{ flex:1, background:'var(--cream05)', border:'1px solid var(--border)', borderRadius:2, padding:'8px 10px', fontSize:12, color:'var(--cream)', fontFamily:"'Space Mono'", outline:'none' }} />
                <button style={{ background:'var(--red)', border:'none', borderRadius:2, padding:'8px 14px', fontSize:11, fontFamily:"'M PLUS 1p'", fontWeight:700, color:'#fff', cursor:'pointer', letterSpacing:'1px' }}>JOIN</button>
              </div>
            </div>

            {/* Ad: Sidebar bottom */}
            <AdSlot size="sidebar" style={{ marginTop:16 }} />
          </aside>
        </div>

        {/* ═══ DAILY POWER RANKINGS ═══ */}
        <section style={{ marginTop:48 }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div className="section-bar" style={{ background:'var(--orange)' }} />
              <h2 className="section-title">DAILY POWER RANKINGS</h2>
              <span className="section-jp">日替パワーランキング</span>
              <span style={{ padding:'3px 8px', fontSize:9, fontFamily:"'Space Mono'", fontWeight:700, background:'rgba(255,107,53,0.15)', color:'var(--orange)', borderRadius:2 }}>AI-POWERED</span>
            </div>
          </div>
          <div className="manga-panel" style={{ background:'var(--surface)', overflow:'hidden' }}>
            {RANKINGS.map((r, i) => {
              const diff = r.prev - r.rank;
              return (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'14px 20px', borderBottom:i<4?'1px solid var(--border)':'none', background:i===0?'rgba(255,107,53,0.04)':'transparent' }}>
                  <span style={{ fontFamily:"'Dela Gothic One'", fontSize:i<3?22:16, color:i<3?'var(--orange)':'var(--cream30)', minWidth:36 }}>{String(r.rank).padStart(2,'0')}</span>
                  <img className="rankings-col-tablet" src={r.img} alt="" style={{ width:40, height:40, borderRadius:4, objectFit:'cover' }} />
                  <span style={{ flex:1, fontFamily:"'Zen Kaku Gothic New'", fontSize:13, fontWeight:700 }}>{r.title}</span>
                  <span className="rankings-col-tablet"><CatBadge cat={r.type} sm /></span>
                  <div className="rankings-col-hide" style={{ width:80 }}>
                    <div style={{ height:4, background:'var(--cream05)', borderRadius:2, overflow:'hidden' }}>
                      <div style={{ width:`${r.score}%`, height:'100%', background:'linear-gradient(90deg,var(--orange),#FFD700)', borderRadius:2 }} />
                    </div>
                  </div>
                  <span style={{ fontFamily:"'Space Mono'", fontSize:11, fontWeight:700, color:diff>0?'#2BD46B':diff<0?'var(--red)':'var(--cream30)', minWidth:30 }}>
                    {diff>0?`▲${diff}`:diff<0?`▼${Math.abs(diff)}`:'—'}
                  </span>
                </div>
              );
            })}
            <div style={{ padding:'12px 20px', borderTop:'1px solid var(--border)', textAlign:'right' }}>
              <Link href="/rankings" style={{ fontFamily:"'M PLUS 1p'", fontSize:10, fontWeight:700, color:'var(--orange)', letterSpacing:'1px' }}>VIEW FULL RANKINGS →</Link>
            </div>
          </div>
        </section>

        {/* Ad: After rankings */}
        <div style={{ marginTop:24 }}><AdSlot size="leaderboard" /></div>
      </main>

      <Footer />
    </>
  );
}
