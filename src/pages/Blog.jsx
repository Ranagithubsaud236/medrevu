import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FileText, ClipboardCheck, BadgeCheck, Code2 } from 'lucide-react'
import { PageHeader, Reveal, Card } from '../components/ui.jsx'
import { blogs } from '../data.js'

const fmt = d => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
const ico = { 'CPT Codes': Code2, 'Credentialing Guides': BadgeCheck, 'Practice Guides': ClipboardCheck }
const Thumb = ({ b, big }) => { const I = ico[b.cat] || FileText; return <div className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-navy to-navy2 ${big ? 'h-64' : 'h-40'}`}>
  <div className="absolute -right-8 -top-8 h-32 w-32 animate-blob bg-gold/25" /><div className="absolute -bottom-10 left-10 h-28 w-28 animate-blob bg-white/10 [animation-delay:3s]" />
  <I className="absolute right-5 top-1/2 -translate-y-1/2 text-gold2/70 transition duration-500 group-hover:scale-125 group-hover:rotate-6" size={big ? 96 : 64} />
  <div className="absolute inset-y-0 left-0 flex w-3/5 items-center bg-gold/95 p-4 [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)] transition-all duration-500 group-hover:w-2/3"><p className="font-serif text-sm font-semibold leading-snug text-navy">{b.title}</p></div></div> }
export function Blog() {
  const [cat, setCat] = useState(''), [page, setPage] = useState(1)
  const cats = [...new Set(blogs.map(b => b.cat))], list = blogs.filter(b => !cat || b.cat === cat), per = 6, pages = Math.ceil(list.length / per)
  return <><PageHeader title="Blogs" sub="Insights for your practice" crumbs={['Blog']} />
    <section className="mx-auto max-w-6xl px-5 py-12"><label className="mb-8 flex items-center gap-3 text-sm font-semibold">Filter by category
      <select value={cat} onChange={e => { setCat(e.target.value); setPage(1) }} className="rounded-lg border px-3 py-2 font-normal"><option value="">All categories</option>{cats.map(c => <option key={c}>{c}</option>)}</select></label>
      <div key={cat + page} className="page grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.slice((page - 1) * per, page * per).map((b, k) => <Reveal key={b.slug} d={k * 80}><Link to={`/blog/${b.slug}`} className="block"><Card><Thumb b={b} /><div className="mt-4 flex items-center gap-2 text-xs"><span className="rounded-full bg-navy px-3 py-0.5 text-white">{b.cat}</span><span className="text-slate-500">{fmt(b.date)}</span></div><h3 className="mt-2 text-lg">{b.title}</h3></Card></Link></Reveal>)}</div>
      <div className="mt-10 flex justify-center gap-2">{Array.from({ length: pages }, (_, k) => <button key={k} onClick={() => setPage(k + 1)} className={`h-10 w-10 rounded-full font-semibold transition ${page === k + 1 ? 'bg-navy text-white' : 'bg-mist hover:bg-gold2'}`}>{k + 1}</button>)}</div></section></>
}
export function Post() {
  const { slug } = useParams(), b = blogs.find(x => x.slug === slug)
  if (!b) return <PageHeader title="Post not found" crumbs={['Blog']} />
  return <><PageHeader title={b.title} sub={`${b.cat} · ${fmt(b.date)}`} crumbs={['Blog', b.cat]} />
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1fr_300px]"><article className="space-y-5 text-lg leading-8 text-slate-700"><Thumb b={b} big />
      <p>This is placeholder article copy for “{b.title}”. Replace it with your own content from a CMS or a markdown file.</p><h2 className="pt-4 text-2xl">Why it matters</h2><p>Clear processes and clean documentation shorten the time between a patient visit and a paid claim. Small improvements at each step add up to a meaningful lift in collections.</p><h2 className="pt-4 text-2xl">Key takeaways</h2><ul className="list-disc space-y-2 pl-6"><li>Verify eligibility before every visit.</li><li>Submit claims within 24 hours.</li><li>Work denials by root cause, not by count.</li></ul></article>
      <aside className="lg:sticky lg:top-28 lg:self-start"><Card><h4 className="mb-3 text-xl">Related posts</h4>{blogs.filter(x => x.slug !== slug).slice(0, 5).map(x => <Link key={x.slug} to={`/blog/${x.slug}`} className="block border-b py-2.5 text-sm font-semibold transition last:border-0 hover:pl-2 hover:text-navy2">{x.title}</Link>)}</Card></aside></section></>
}
