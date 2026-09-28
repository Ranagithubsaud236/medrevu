import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Rocket, ChevronRight } from 'lucide-react'

export function Reveal({ children, d = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${d}ms` }}>{children}</div>
}
export function Btn({ to, onClick, children, icon: Icon = Rocket, light }) {
  const cls = `group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl ${light ? 'bg-white text-navy' : 'bg-navy text-white'}`
  const inner = <>{children}<span className={`grid h-9 w-9 place-items-center rounded-full transition group-hover:rotate-12 ${light ? 'bg-navy text-white' : 'bg-gold text-navy'}`}><Icon size={16} /></span></>
  return to ? <Link to={to} className={cls}>{inner}</Link> : <button onClick={onClick} className={cls}>{inner}</button>
}
export function PageHeader({ title, sub, crumbs = [] }) {
  return (
    <section className="grid-bg relative overflow-hidden bg-navy py-14 text-white">
      <div className="absolute -right-20 -top-20 h-72 w-72 animate-blob bg-gold/20" />
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-5">
        <div>{sub && <p className="mb-1 text-gold2">{sub}</p>}<h1 className="text-4xl text-white md:text-5xl">{title}</h1></div>
        <nav className="flex items-center gap-1 text-sm text-white/80"><Link to="/" className="hover:text-gold">Home</Link>
          {crumbs.map(c => <span key={c} className="flex items-center gap-1"><ChevronRight size={14} />{c}</span>)}</nav>
      </div>
    </section>
  )
}
export function Title({ children, sub, center = true }) {
  return <div className={`mb-10 ${center ? 'text-center' : ''}`}><h2 className="text-3xl md:text-4xl">{children}</h2>{sub && <p className="mx-auto mt-3 max-w-2xl text-slate-600">{sub}</p>}</div>
}
export function CountUp({ value }) {
  const [n, setN] = useState(0); const ref = useRef(null)
  const m = String(value).match(/^([^\d]*)(\d+)(.*)$/)
  useEffect(() => {
    if (!m) return
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect()
      const end = +m[2], t0 = performance.now()
      const tick = t => { const p = Math.min((t - t0) / 1400, 1); setN(Math.round(end * p)); if (p < 1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick) })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <span ref={ref}>{m ? m[1] + n + m[3] : value}</span>
}
export function Marquee({ items, render }) {
  const list = [...items, ...items]
  return <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
    <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">{list.map((it, i) => <div key={i}>{render(it)}</div>)}</div></div>
}
export const Card = ({ children, className = '' }) => <div className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${className}`}>{children}</div>
export const IconBox = ({ icon: I, size = 22, tone = 'gold' }) => <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tone === 'gold' ? 'bg-gold2/60 text-navy' : 'bg-navy text-gold2'}`}><I size={size} /></span>

export const photos = { doc1: '/images/doctor-1.png', doc2: '/images/doctor-2.png', doc3: '/images/doctor-3.png', nurse: '/images/nurse-cards.png', manager: '/images/manager-cards.png' }
const framed = [photos.doc1, photos.doc2]
// Photo that drifts gently up and down. Cut-out PNGs sit on a morphing gold blob;
// photos with a background are masked inside the blob instead.
export function Photo({ src = photos.doc3, blob = true, className = '', alt = 'Healthcare professional', children }) {
  return <div className={`relative ${className}`}>
    <div className="absolute inset-0 animate-float [animation-duration:6s]">
      {framed.includes(src) ? <>
        <div className="absolute inset-[5%] translate-x-5 translate-y-4 animate-blob bg-gold" />
        <div className="absolute inset-[5%] animate-blob overflow-hidden bg-white shadow-2xl ring-4 ring-white [animation-delay:-3s]"><img src={src} alt={alt} className="h-full w-full animate-zoom object-cover object-top" /></div>
      </> : <>
        {blob && <div className="absolute inset-x-[8%] bottom-[6%] top-[8%] animate-blob bg-gold" />}
        <img src={src} alt={alt} className="relative h-full w-full object-contain object-bottom drop-shadow-[0_18px_30px_rgba(11,29,54,.25)]" />
      </>}
    </div>{children}</div>
}
