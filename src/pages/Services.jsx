import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Photo, photos, PageHeader, Reveal, Btn, Title, Card, IconBox } from '../components/ui.jsx'

export function Listing({ kind, items, title }) {
  return <><PageHeader title={title} sub="Built around your revenue" crumbs={[title]} />
    <section className="mx-auto max-w-6xl px-5 py-16"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((s, k) => <Reveal key={s.slug} d={(k % 3) * 100}>
      <Link to={`/${kind}/${s.slug}`} className="group block h-full"><Card className="h-full"><IconBox icon={s.icon} tone="navy" /><h3 className="mt-4 text-xl">{s.title}</h3><p className="mt-2 text-slate-600">{s.short}</p><span className="mt-4 inline-flex items-center gap-1 font-semibold text-navy2">Read more <ArrowRight size={16} className="transition group-hover:translate-x-1.5" /></span></Card></Link></Reveal>)}</div></section></>
}
const feats = t => [`Dedicated ${t.toLowerCase()} team`, 'Weekly performance reporting', 'Payer-specific rules built in', 'Transparent, month-to-month pricing', 'HIPAA-secure workflows', 'Direct line to your account lead']
const steps = ['Discovery call', 'Workflow review', 'Onboarding', 'Ongoing optimization']
export function Detail({ kind, items }) {
  const { slug } = useParams(), i = items.findIndex(x => x.slug === slug), s = items[i]
  if (!s) return <PageHeader title="Not found" crumbs={['Not found']} />
  const label = kind === 'services' ? 'Services' : 'Specialties'
  return <><PageHeader title={s.title} sub={label} crumbs={[label, s.title]} />
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_320px]"><div>
      <Reveal><div className="mb-8 rounded-3xl bg-mist py-6"><Photo src={[photos.doc3, photos.doc1, photos.doc2][i % 3]} className="mx-auto h-80 w-72"><span className="absolute left-4 top-6 flex animate-float items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold shadow-xl"><s.icon size={18} className="text-gold" />{s.title}</span></Photo></div><h2 className="mt-5 text-3xl">How we handle {s.title.toLowerCase()}</h2><p className="mt-4 text-lg text-slate-600">{s.short} Our team combines certified expertise with proven workflows, so your practice sees faster payments and fewer surprises.</p></Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">{feats(s.title).map((f, k) => <Reveal key={f} d={k * 70}><div className="flex items-center gap-3 rounded-xl bg-mist p-4 transition hover:bg-cream"><CheckCircle2 className="shrink-0 text-gold" />{f}</div></Reveal>)}</div>
      <Title center={false}>Our process</Title><div className="space-y-4">{steps.map((t, k) => <Reveal key={t} d={k * 80}><div className="flex items-center gap-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-navy font-semibold text-white">{k + 1}</span><span className="font-semibold">{t}</span></div></Reveal>)}</div></div>
      <aside className="space-y-6 lg:sticky lg:top-36 lg:self-start"><Card><h4 className="mb-3 text-xl">Other {label.toLowerCase()}</h4><ul className="space-y-1">{items.filter(x => x.slug !== slug).slice(0, 8).map(x => <li key={x.slug}><Link className="block rounded-lg px-3 py-2 transition hover:bg-cream hover:pl-4" to={`/${kind}/${x.slug}`}>{x.title}</Link></li>)}</ul></Card>
        <div className="rounded-2xl bg-navy p-6 text-white"><h4 className="text-xl text-white">Talk to an expert</h4><p className="my-3 text-white/80">Free audit of your last 90 days of claims.</p><Btn light to="/contact">Request an audit</Btn></div></aside></section></>
}
