import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, FileCheck2, UserRoundCog, ChartNoAxesCombined, Quote, CalendarClock, TrendingUp, Target, Wallet, ClipboardCheck, FileCode2, Clock, BadgeDollarSign, ShieldCheck, Send, Search, UserCheck, Hourglass } from 'lucide-react'
import { Reveal, Btn, Marquee, Photo, photos } from '../components/ui.jsx'
import { GoogleReviews, Goodfirms, certLogos, clientLogos, ClientLogo } from '../components/brand.jsx'
import { services, specialties, blogs, testimonials } from '../data.js'

const Float = ({ icon: I, children, className = '', d = 0 }) =>
  <div style={{ animationDelay: `${d}s` }} className={`absolute z-10 flex w-40 animate-float items-center gap-2.5 rounded-lg bg-white/95 p-2 text-[12px] font-bold leading-tight text-slate-700 shadow-xl ring-1 ring-slate-100 ${className}`}>
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy2 text-white"><I size={18} /></span>{children}</div>

function Hero() {
  return <section className="overflow-hidden bg-mist"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 md:grid-cols-2">
    <div className="pb-14"><h1 className="text-4xl font-normal leading-tight text-slate-700 md:text-[44px]">Experience Revenue Transformation through <b className="block font-bold text-navy2">Precise Billing</b></h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-800">Get paid for the care you provide. We ensure accurate claims filing, reduced denials, and improved cash flow with our proven solutions to enhance your practice's financial and operational strength.</p>
      <div className="mt-8"><Btn to="/contact">Get Started</Btn></div>
      <div className="mt-6 flex max-w-md items-center justify-around"><GoogleReviews /><Goodfirms /></div></div>
    <Photo src={photos.doc3} className="mx-auto h-[400px] w-[320px] md:h-[450px] md:w-[360px]">
      <Float icon={FileCheck2} className="-left-8 top-[8%] md:-left-20">Reduce Claim Denials</Float>
      <Float icon={UserRoundCog} d={1} className="-right-8 top-[45%] md:-right-20">Minimize Physician Burnout</Float>
      <Float icon={ChartNoAxesCombined} d={2} className="-left-8 bottom-[14%] md:-left-24">Optimize Cash Flow</Float>
    </Photo></div></section>
}

function Certified() {
  return <section className="mx-auto max-w-6xl px-5 py-20"><h2 className="mb-12 text-center text-3xl font-normal text-slate-700 md:text-[32px]">Work with a <b className="font-bold text-navy2">Certified</b> Partner</h2>
    <div className="grid grid-cols-3 items-center gap-8 md:grid-cols-6">{certLogos.map(([n, L], k) => <Reveal key={n} d={k * 80}><div title={n} className="mx-auto h-20 w-32 transition duration-300 hover:-translate-y-1 hover:scale-105"><L /></div></Reveal>)}</div></section>
}

const statIcons = [CalendarClock, TrendingUp, Target, Wallet, ClipboardCheck]
const statList = [['< 30', 'Days in AR'], ['10-15%', 'Revenue Increase'], ['97%', 'First Pass Ratio'], ['96%', 'Collection Ratio'], ['98%', 'Clean Claim Rate']]
const Stat = ({ v, l, I, d }) => <Reveal d={d}><div className="relative h-36 w-36 rounded-xl bg-white p-3 shadow-[0_10px_30px_rgba(11,29,54,.18)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 md:h-[150px] md:w-[150px]">
  <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-md bg-gold text-white"><I size={16} /></span>
  <div className="absolute bottom-4 left-4"><div className="text-3xl text-slate-700">{v}</div><p className="mt-0.5 text-[11px] font-bold text-slate-600">{l}</p></div></div></Reveal>
function Different() {
  return <section className="mx-auto max-w-4xl px-5 py-10 md:py-24"><div className="grid-bg rounded-3xl bg-navy2 px-5 py-8 md:px-10 md:py-0">
    <div className="flex flex-wrap justify-center gap-5 md:-translate-y-1/3 md:justify-between md:px-8">{statList.slice(0, 3).map(([v, l], k) => <Stat key={l} v={v} l={l} I={statIcons[k]} d={k * 100} />)}</div>
    <h2 className="my-8 text-center text-2xl font-normal leading-snug text-white md:-my-2 md:text-[28px]">What Makes <b className="font-bold">MedRevu</b><br />Different from Others!</h2>
    <div className="flex flex-wrap justify-center gap-5 md:translate-y-1/3 md:gap-12">{statList.slice(3).map(([v, l], k) => <Stat key={l} v={v} l={l} I={statIcons[k + 3]} d={(k + 3) * 100} />)}</div></div></section>
}

const tabData = [
  [6, 'Bill, track, and collect every incoming payment for the services rendered to your patients. Our premier RCM services help you manage your financial operations.', [[Send, 'Streamline coding submission'], [Clock, 'Eliminate reimbursement delays'], [BadgeDollarSign, 'Maximize insurance reimbursements'], [ShieldCheck, 'Improve denial management']]],
  [1, 'Submit clean claims faster and get paid on the first pass. Our billing team scrubs every claim against payer rules before it leaves your office.', [[FileCheck2, 'Clean claims in 24 hours'], [Search, 'Payer-specific claim scrubbing'], [BadgeDollarSign, 'Faster payment posting'], [ShieldCheck, 'Fewer rejected claims']]],
  [3, 'Certified coders assign accurate ICD-10, CPT and HCPCS codes so every service is documented, compliant, and paid in full.', [[FileCode2, 'Certified AAPC coders'], [ClipboardCheck, 'Audit-ready documentation'], [Target, 'Accurate modifier usage'], [ShieldCheck, 'Lower compliance risk']]],
  [4, 'Get enrolled with payers without the paperwork. We handle applications, follow-ups, and re-credentialing from start to approval.', [[UserCheck, 'Faster payer enrollment'], [Hourglass, 'No missed re-credentialing'], [FileCheck2, 'CAQH profile upkeep'], [BadgeDollarSign, 'Start billing sooner']]],
]
function Tabs() {
  const [i, setI] = useState(0), [k, text, feats] = tabData[i], t = services[k]
  return <section className="mx-auto max-w-4xl px-5 py-16">
    <div className="flex flex-wrap justify-around rounded-md bg-white shadow-[0_4px_20px_rgba(11,29,54,.08)] ring-1 ring-slate-100">{tabData.map(([n], j) =>
      <button key={n} onClick={() => setI(j)} className={`relative px-4 py-3.5 text-[13px] font-bold transition after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:bg-navy2 after:transition-transform ${j === i ? 'text-navy after:scale-x-100' : 'text-slate-600 after:scale-x-0 hover:text-navy2'}`}>{services[n].title}</button>)}</div>
    <div key={i} className="page mt-6 grid items-center gap-8 md:grid-cols-2">
      <div><span className="grid h-12 w-12 place-items-center rounded-lg bg-gold text-white"><t.icon size={26} /></span>
        <h2 className="mt-5 text-2xl font-bold text-navy2 md:text-[26px]">{t.title}</h2>
        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-slate-800">{text}</p>
        <div className="mt-6 flex flex-wrap gap-4"><Btn to={`/services/${t.slug}`}>Learn More</Btn><Btn to="/services">View All Services</Btn></div></div>
      <Photo src={[photos.doc1, photos.doc2, photos.doc3, photos.doc1][i]} className="mx-auto h-[340px] w-[270px]">
        {feats.map(([I, l], j) => <Float key={l} icon={I} d={j * .7} className={['-left-10 top-[6%] md:-left-24', '-right-10 top-[28%] md:-right-24', '-left-10 top-[55%] md:-left-28', '-right-10 bottom-[6%] md:-right-20'][j]}>{l}</Float>)}
      </Photo></div></section>
}

function Story() {
  return <section className="mx-auto max-w-[62rem] px-5"><Reveal><div className="grid-bg rounded-3xl bg-navy2 px-8 py-10 text-center text-white md:px-24">
    <h2 className="text-3xl font-normal leading-tight text-white">Short Story<br />About <b className="font-bold">MedRevu</b></h2>
    <p className="mx-auto mt-6 max-w-2xl text-[16px] font-semibold leading-snug text-white">MedRevu is a trusted partner for medical billing. Leveraging our deep expertise in healthcare IT and billing, we provide fast and efficient solutions tailored to the unique needs of each practice. Our end-to-end services include medical claims processing, aging AR recovery, and practice management solutions for accelerated revenue growth.</p></div></Reveal></section>
}

const Chip = ({ s: { slug, title, icon: I }, k }) => <Link to={`/specialties/${slug}`} className={`flex w-fit items-center gap-2 rounded-md bg-white p-1.5 pr-3 text-[13px] font-semibold text-slate-700 shadow-[0_4px_16px_rgba(11,29,54,.12)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${k % 2 ? 'md:translate-y-1/2' : ''}`}>
  <span className={`grid h-7 w-7 place-items-center rounded ${k % 3 === 1 ? 'bg-navy2' : 'bg-gold'} text-white`}><I size={16} /></span>{title}</Link>
function Specialties() {
  const bySlug = x => specialties.find(s => s.slug === x)
  const left = ['cardiology', 'radiology', 'oncology', 'ob-gyn'].map(bySlug), right = ['anesthesiology', 'neurology', 'orthopedics', 'gastroenterology'].map(bySlug)
  const side = list => <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8">{list.map((s, k) => <Chip key={s.slug} s={s} k={k} />)}</div>
  return <section className="mx-auto max-w-5xl px-5 py-24"><div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
    {side(left)}
    <Reveal className="order-first text-center md:order-none"><h2 className="text-2xl font-normal leading-tight text-slate-700">MedRevu<b className="block font-bold text-navy2">Specialties</b></h2>
      <p className="mx-auto mt-5 max-w-56 text-[12px] leading-relaxed text-slate-700">We cater to the unique coding and reimbursement requirements of all specialties.</p>
      <div className="mt-5"><Btn to="/specialties">View All Specialties</Btn></div></Reveal>
    {side(right)}</div></section>
}

function Trusted() {
  return <section className="pb-20"><h2 className="mb-8 text-center text-2xl font-bold text-navy2">Trusted by 200+ Healthcare Practices</h2>
    <div className="mx-auto max-w-5xl"><Marquee items={clientLogos} render={([name, sub, icon, cls, color]) => <ClientLogo name={name} sub={sub} icon={icon} cls={cls} color={color} />} /></div></section>
}

function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % testimonials.length), 5000); return () => clearInterval(t) }, [])
  const [q, n, r] = testimonials[i]
  return <section className="bg-mist py-20"><div className="mx-auto max-w-3xl px-5 text-center"><h2 className="mb-10 text-3xl font-normal text-slate-700">What Our <b className="font-bold text-navy2">Clients</b> Say</h2>
    <div key={i} className="page relative rounded-3xl bg-white p-10 shadow-xl"><Quote className="mx-auto mb-4 text-gold" size={36} /><p className="text-xl font-semibold text-slate-700">{q}</p><p className="mt-5 font-bold text-navy2">{n}</p><p className="text-sm text-slate-500">{r}</p></div>
    <div className="mt-6 flex items-center justify-center gap-4"><button aria-label="Previous" onClick={() => setI((i + 2) % 3)}><ChevronLeft /></button>{testimonials.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-2.5 rounded-full transition-all ${k === i ? 'w-8 bg-gold' : 'w-2.5 bg-slate-300'}`} />)}<button aria-label="Next" onClick={() => setI((i + 1) % 3)}><ChevronRight /></button></div></div></section>
}

export default function Home() {
  return <div className="home">
    <Hero /><Certified /><Different /><Tabs /><Story /><Specialties /><Trusted /><Testimonials />
    <section className="mx-auto max-w-6xl px-5 py-20"><div className="mb-8 flex items-center justify-between"><h2 className="text-3xl font-normal text-slate-700">Recent <b className="font-bold text-navy2">Blogs</b></h2><Link to="/blog" className="rounded-full border-2 border-navy px-5 py-1.5 font-semibold transition hover:bg-navy hover:text-white">All blogs</Link></div>
      <div className="grid gap-5 md:grid-cols-4">{blogs.slice(0, 4).map((b, k) => <Reveal key={b.slug} d={k * 100}><Link to={`/blog/${b.slug}`} className="group block h-full rounded-2xl bg-mist p-5 transition hover:-translate-y-1.5 hover:shadow-lg"><span className="rounded-full bg-navy px-3 py-0.5 text-xs text-white">{b.date}</span><h3 className="mt-3 text-lg font-bold text-slate-700">{b.title}</h3><ArrowRight className="mt-4 text-gold transition group-hover:translate-x-2" /></Link></Reveal>)}</div></section>
    <section className="mx-auto max-w-6xl px-5"><Reveal><div className="grid-bg relative flex min-h-64 flex-col items-start justify-center gap-6 overflow-hidden rounded-3xl bg-navy2 p-10 text-white"><h2 className="max-w-md text-3xl font-normal text-white md:text-4xl">Start Optimizing Your <b className="font-bold">Billing Today</b></h2><Btn light to="/contact">Request an audit</Btn>
      <div className="pointer-events-none absolute bottom-0 right-6 hidden md:block"><Photo src={photos.manager} blob={false} className="h-72 w-80" alt="Billing manager" /></div></div></Reveal></section>
  </div>
}
