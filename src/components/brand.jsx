import { Leaf, Anchor, Mountain, Crown, TreePine, Cross, Microscope } from 'lucide-react'

// Hexagon mark with a pulse line that rises into an "M", plus the wordmark.
export function Logo({ light = false, className = '' }) {
  return <span className={`flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 48 48" className="h-11 w-11 shrink-0" aria-hidden="true">
      <defs><linearGradient id="lg-hex" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#16406b" /><stop offset="1" stopColor="#0b1d36" /></linearGradient>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#e8d3a0" /><stop offset=".5" stopColor="#c9a24b" /><stop offset="1" stopColor="#e8d3a0" /></linearGradient></defs>
      <path d="M24 2.5 42.6 13.25v21.5L24 45.5 5.4 34.75v-21.5z" fill="url(#lg-hex)" />
      <path d="M24 6.2 39.4 15.1v17.8L24 41.8 8.6 32.9V15.1z" fill="none" stroke="url(#lg-gold)" strokeWidth="1" opacity=".7" />
      <path d="M9 26h6l3-9 5 15 4-19 4 13h8" fill="none" stroke="url(#lg-gold)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="39" cy="26" r="1.9" fill="#e8d3a0" />
    </svg>
    <span className="leading-none"><span className={`block font-serif text-[26px] font-semibold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>Medi<span className="gold-text font-light italic">Revu</span></span>
      <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[.32em] ${light ? 'text-white/60' : 'text-slate-400'}`}>Revenue · Care · Clarity</span></span>
  </span>
}

// Line icon with a small accent icon tucked into its corner, like the reference site's two-tone icons.
export function DuoIcon({ icon: I, accent: A, size = 56 }) {
  return <span className="relative inline-block bg-inherit">
    <I size={size} strokeWidth={1.25} className="text-navy2" />
    {A && <span className="absolute -bottom-1 -right-2 grid place-items-center rounded-full bg-inherit p-0.5"><A size={size * 0.42} strokeWidth={1.8} className="text-gold" /></span>}
  </span>
}

// Certification badges, drawn as inline SVG so they stay crisp at any size.
const Iso = () => <svg viewBox="0 0 120 80"><g fill="none" stroke="#1e3f8f" strokeWidth="1.4"><circle cx="60" cy="30" r="25" /><ellipse cx="60" cy="30" rx="11" ry="25" /><path d="M35 30h50M39 17h42M39 43h42M60 5v50" /></g>
  <text x="60" y="41" textAnchor="middle" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="28" fill="#1e3f8f" stroke="#fff" strokeWidth="4" paintOrder="stroke">ISO</text>
  <text x="60" y="71" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="12.5" fill="#1e3f8f">9001:2015</text></svg>
const Cpc = () => <svg viewBox="0 0 120 80"><defs><path id="cpc-t" d="M28 40a32 32 0 0 1 64 0" /><path id="cpc-b" d="M30 40a30 30 0 0 0 60 0" /></defs>
  <circle cx="60" cy="40" r="37" fill="#0f4c5c" /><circle cx="60" cy="40" r="37" fill="none" stroke="#e8f1f2" strokeWidth="1" strokeDasharray="2 2" opacity=".5" />
  <text fontFamily="Arial" fontSize="6.5" fontWeight="700" fill="#fff" letterSpacing="1"><textPath href="#cpc-t" startOffset="50%" textAnchor="middle">CERTIFIED PROFESSIONAL</textPath></text>
  <text fontFamily="Arial" fontSize="7" fontWeight="700" fill="#fff" letterSpacing="1.5"><textPath href="#cpc-b" startOffset="50%" textAnchor="middle" dominantBaseline="hanging">CERTIFICATION</textPath></text>
  <circle cx="60" cy="40" r="22" fill="#fff" /><text x="60" y="45" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="16" fill="#0f4c5c">CPC<tspan fontSize="7" dy="-7">®</tspan></text></svg>
const Crcr = () => <svg viewBox="0 0 120 80"><defs><path id="crcr-t" d="M31 40a29 29 0 0 1 58 0" /></defs>
  <circle cx="60" cy="40" r="37" fill="#29a9e0" /><circle cx="60" cy="40" r="26" fill="#fff" />
  <text fontFamily="Arial" fontSize="5.8" fontWeight="700" fill="#fff" letterSpacing=".6"><textPath href="#crcr-t" startOffset="50%" textAnchor="middle">REVENUE CYCLE REPRESENTATIVE</textPath></text>
  <text x="60" y="44" textAnchor="middle" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="15" fill="#29a9e0">CRCR</text>
  <text x="60" y="72" textAnchor="middle" fontFamily="Arial" fontStyle="italic" fontWeight="700" fontSize="8" fill="#fff">hfma</text></svg>
const Hipaa = () => <svg viewBox="0 0 120 80"><g fill="none" stroke="#1f73b7" strokeWidth="2" strokeLinecap="round">
  <path d="M30 10v60" strokeWidth="2.6" /><path d="M30 18c-10-6-20-4-26 2 8 0 16 2 26 6M30 18c10-6 20-4 26 2-8 0-16 2-26 6" />
  <path d="M24 32c10 4 10 10 0 14s-10 10 0 14M36 32c-10 4-10 10 0 14s10 10 0 14" /><circle cx="30" cy="9" r="3" fill="#1f73b7" /></g>
  <text x="80" y="42" textAnchor="middle" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="#1f73b7">HIPAA</text>
  <text x="80" y="56" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="8.5" letterSpacing="1.4" fill="#5b8fc0">COMPLIANT</text></svg>
const Aaham = () => <svg viewBox="0 0 120 80"><path d="M14 26q46-26 96-2" fill="none" stroke="#7ab648" strokeWidth="3" strokeLinecap="round" />
  <text x="60" y="48" textAnchor="middle" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="23" fill="#1b3f78" letterSpacing="1">AAHAM</text>
  <text x="60" y="59" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="4.6" fill="#7ab648">American Association of Healthcare</text>
  <text x="60" y="65" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="4.6" fill="#7ab648">Administrative Management</text>
  <text x="60" y="74" textAnchor="middle" fontFamily="Arial" fontStyle="italic" fontSize="4.4" fill="#1b3f78">The Premier Organization for Revenue Cycle Professionals</text></svg>
const Aapc = () => <svg viewBox="0 0 120 80"><circle cx="24" cy="40" r="19" fill="none" stroke="#1b3f78" strokeWidth="2.4" />
  <path d="M24 26v28M17 32q7-5 14 0M18 40q6 4 12 0M20 47q4 3 8 0" fill="none" stroke="#1b3f78" strokeWidth="2" strokeLinecap="round" /><circle cx="24" cy="25" r="2.4" fill="#1b3f78" />
  <text x="76" y="46" textAnchor="middle" fontFamily="Georgia,serif" fontSize="23" fill="#1b3f78" letterSpacing="1">AAPC</text>
  <text x="76" y="58" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="5" letterSpacing=".5" fill="#1b3f78">EDUCATION PROVIDER</text></svg>
export const certLogos = [['ISO 9001:2015', Iso], ['CPC Certification', Cpc], ['CRCR by HFMA', Crcr], ['HIPAA Compliant', Hipaa], ['AAHAM', Aaham], ['AAPC Education Provider', Aapc]]

const stars = (cls) => <span className={`flex ${cls}`}>{[0, 1, 2, 3, 4].map(i => <svg key={i} viewBox="0 0 20 20" className="h-full w-auto" fill="currentColor"><path d="M10 1.5l2.6 5.5 6 .7-4.5 4.1 1.2 5.9L10 14.8 4.7 17.7l1.2-5.9L1.4 7.7l6-.7z" /></svg>)}</span>
export function GoogleReviews() {
  return <span className="inline-flex flex-col items-center leading-none" aria-label="Google Reviews, 5 stars">
    <span className="font-['Arial'] text-[40px] font-medium tracking-tight"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span>
    <span className="-mt-0.5 flex items-center gap-1 text-[13px] font-semibold text-slate-600">Reviews {stars('h-3 text-[#FBBC05]')}</span></span>
}
export function Goodfirms() {
  return <span className="inline-flex flex-col items-start leading-none" aria-label="GoodFirms, 5 stars">
    <span className="flex items-center gap-1.5"><svg viewBox="0 0 24 28" className="h-7 w-6"><path d="M2 2h20v17l-10 7-10-7z" fill="#c69a45" /><path d="M12 7l1.6 3.3 3.6.4-2.7 2.5.8 3.6-3.3-1.9-3.3 1.9.8-3.6-2.7-2.5 3.6-.4z" fill="#fff" /></svg>
      <span className="font-['Arial'] text-[22px] text-slate-700">Goodfirms</span></span>
    <span className="mt-1.5">{stars('h-5 gap-0.5 text-[#c69a45]')}</span></span>
}

// Stand-in client logos: each one a mark plus a distinct wordmark style.
export const clientLogos = [
  ['Northgate', 'Family Care', Leaf, 'font-extrabold uppercase tracking-tight', '#0f766e'],
  ['Willow', 'OB/GYN', null, 'font-serif italic text-2xl', '#9d4b73'],
  ['Harbor', 'Research Clinic', Anchor, 'font-bold uppercase tracking-[.2em] text-sm', '#1e3a8a'],
  ['Summit', 'Spine & Sport', Mountain, 'font-black', '#b45309'],
  ['Primary', 'Med Group', Cross, 'font-semibold', '#be123c'],
  ['Cedar', 'Clinic', TreePine, 'font-serif font-bold', '#166534'],
  ['Regent', 'Health', Crown, 'font-bold uppercase tracking-widest', '#5b21b6'],
  ['Integrated', 'Diagnostics', Microscope, 'font-extrabold uppercase', '#334155'],
]
export function ClientLogo({ name, sub, icon: I, cls, color }) {
  return <span className="flex h-16 items-center gap-2 px-4 grayscale transition duration-300 hover:grayscale-0" style={{ color }}>
    {I && <I size={30} strokeWidth={2.2} />}<span className="leading-none"><span className={`block text-xl ${cls}`}>{name}</span><span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-widest text-slate-500">{sub}</span></span></span>
}
