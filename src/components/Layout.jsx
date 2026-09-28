import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Briefcase, Stethoscope, ArrowRight, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ChevronDown, Menu, X, ArrowUp, MapPin, Calculator, Rocket } from 'lucide-react'
import { brand, services, specialties } from '../data.js'
import { Logo, DuoIcon } from './brand.jsx'

export function TopBar() {
  return <div className="hidden bg-navy text-sm text-white md:block"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
    <div className="flex gap-6"><a className="flex items-center gap-2 hover:text-gold" href={`tel:${brand.phone}`}><Phone size={14} />{brand.phone}</a><a className="flex items-center gap-2 hover:text-gold" href={`mailto:${brand.email}`}><Mail size={14} />{brand.email}</a></div>
    <div className="flex items-center gap-4">{[Facebook, Twitter, Linkedin, Instagram].map((I, i) => <a key={i} href="#" className="transition hover:-translate-y-0.5 hover:text-gold"><I size={15} /></a>)}
      <Link to="/contact" className="ml-2 flex items-center gap-2 rounded-full bg-gold px-4 py-1 font-semibold text-navy transition hover:bg-gold2">Get a Quote <Rocket size={14} /></Link></div></div></div>
}
const Mega = ({ items, base, all, icon: HI, cols }) => (
  <div className="invisible absolute inset-x-0 top-full z-40 translate-y-3 border-t border-slate-200 bg-white opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
    <div className="mx-auto max-w-6xl px-5 py-7">
      <Link to={base} className="mb-6 inline-flex items-center gap-2 text-xl font-bold text-navy2 underline decoration-2 underline-offset-4 transition hover:text-gold"><HI size={22} className="fill-navy2/15" />{all}</Link>
      <div className={`grid gap-5 ${cols}`}>{items.map(({ slug, title, icon, accent }) => (
        <NavLink key={slug} to={`${base}/${slug}`} className={({ isActive }) => `group/i flex min-h-40 flex-col items-center justify-center gap-4 rounded-xl p-4 text-center text-[15px] font-bold leading-snug text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${isActive ? 'bg-white shadow-md ring-2 ring-gold' : 'bg-mist'}`}>
          <span className="bg-inherit transition-transform duration-300 group-hover/i:scale-110"><DuoIcon icon={icon} accent={accent} /></span>{title}</NavLink>))}</div>
    </div></div>
)
export function Navbar() {
  const [open, setOpen] = useState(false), [scrolled, setS] = useState(false), { pathname } = useLocation()
  useEffect(() => { const f = () => setS(scrollY > 60); addEventListener('scroll', f); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => { setOpen(false) }, [pathname])
  const link = ({ isActive }) => `relative py-2 font-semibold transition hover:text-navy2 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-gold after:transition-all ${isActive ? 'text-navy2 after:w-full' : 'after:w-0 hover:after:w-full'}`
  const sect = p => `flex items-center gap-1 ${link({ isActive: pathname.startsWith(p) })}`
  return (
    <header className={`relative bg-white/95 backdrop-blur transition-all ${scrolled ? 'shadow-md' : ''}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link to="/" aria-label="MedRevu home"><Logo /></Link>
        <nav className="hidden items-center gap-7 self-stretch text-[15px] lg:flex">
          <NavLink to="/" end className={link}>Home</NavLink>
          <div className="group flex h-full items-center"><NavLink to="/services" className={() => sect('/services')}>Services <ChevronDown size={14} className="transition group-hover:rotate-180" /></NavLink><Mega items={services} base="/services" all="View all Services" icon={Briefcase} cols="grid-cols-7" /></div>
          <div className="group flex h-full items-center"><NavLink to="/specialties" className={() => sect('/specialties')}>Specialties <ChevronDown size={14} className="transition group-hover:rotate-180" /></NavLink><Mega items={specialties} base="/specialties" all="View all Specialties" icon={Stethoscope} cols="grid-cols-6" /></div>
          <NavLink to="/blog" className={() => sect('/blog')}>Blog</NavLink><NavLink to="/about" className={link}>About</NavLink><NavLink to="/contact" className={link}>Contact</NavLink>
          <NavLink to="/partner" className={({ isActive }) => `rounded-lg border-2 px-5 py-2 font-semibold transition ${isActive ? 'border-navy bg-navy text-white' : 'border-gold hover:bg-gold hover:text-navy'}`}>Become a Partner</NavLink>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="page max-h-[80vh] overflow-auto border-t bg-white px-5 pb-6 lg:hidden">
        {[['/', 'Home'], ['/services', 'Services'], ...services.map(x => [`/services/${x.slug}`, '– ' + x.title]), ['/specialties', 'Specialties'], ['/blog', 'Blog'], ['/about', 'About'], ['/contact', 'Contact'], ['/partner', 'Become a Partner']].map(([to, t]) =>
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `block border-b py-2.5 ${isActive ? 'font-bold text-navy2' : ''}`}>{t}</NavLink>)}</div>}
    </header>)
}
export function Footer() {
  return <footer className="mt-24 bg-navy pb-6 text-white/75"><div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr]">
    <div className="-mt-12 rounded-2xl bg-white p-8 text-center text-navy shadow-2xl"><Logo className="justify-center" />
      <p className="mt-4">Call now</p><a href={`tel:${brand.phone}`} className="font-serif text-3xl text-navy2">{brand.phone}</a>
      <hr className="my-4" /><p className="flex items-center justify-center gap-2 text-sm"><Mail size={14} />{brand.email}</p><p className="mt-2 flex items-start justify-center gap-2 text-sm"><MapPin size={14} className="mt-0.5 shrink-0" />{brand.address}</p></div>
    <div className="pt-8"><h4 className="mb-4 text-xl text-white">Services</h4><ul className="space-y-2">{services.map(x => <li key={x.slug}><Link className="transition hover:pl-1 hover:text-gold" to={`/services/${x.slug}`}>{x.title}</Link></li>)}</ul></div>
    <div className="pt-8"><h4 className="mb-4 text-xl text-white">Quick links</h4><ul className="space-y-2">{[['/specialties', 'Specialties'], ['/blog', 'Blog'], ['/about', 'About'], ['/contact', 'Contact'], ['/partner', 'Become a Partner']].map(([to, t]) => <li key={to}><Link className="transition hover:pl-1 hover:text-gold" to={to}>{t}</Link></li>)}</ul></div>
  </div><p className="mt-12 border-t border-white/10 pt-5 text-center text-sm">© {brand.name} 2023 – 2026. All rights reserved.</p></footer>
}
export function Popup() {
  const [show, setShow] = useState(false), [modal, setModal] = useState(false)
  useEffect(() => { const t = setTimeout(() => setShow(true), 2500); const o = () => setModal(true); addEventListener('open-calc', o); return () => { clearTimeout(t); removeEventListener('open-calc', o) } }, [])
  return <>
    {show && <div className="fixed bottom-5 left-5 z-40 w-56 animate-pop rounded-2xl bg-gradient-to-br from-navy to-navy2 p-5 text-center text-white shadow-2xl">
      <button onClick={() => setShow(false)} aria-label="Close" className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white text-navy"><X size={14} /></button>
      <Calculator className="mx-auto mb-2 animate-float text-gold" size={40} /><p className="font-semibold">Estimate savings with outsourced billing</p>
      <button onClick={() => setModal(true)} className="mt-3 rounded-full bg-gold px-5 py-2 font-semibold text-navy transition hover:scale-105">Calculate now</button></div>}
    {modal && <Calc onClose={() => setModal(false)} />}</>
}
function F({ l, v, set, min, max, step, suf }) {
  const fmt = n => '$' + Math.round(n).toLocaleString()
  return <label className="mb-4 block text-sm font-semibold">{l}: <span className="text-navy2">{suf === '$' ? fmt(v) : v + suf}</span><input type="range" min={min} max={max} step={step} value={v} onChange={e => set(+e.target.value)} className="mt-2 w-full accent-[#c9a24b]" /></label>
}
function Calc({ onClose }) {
  const [c, setC] = useState(80000), [cost, setCost] = useState(8), [den, setDen] = useState(12)
  const save = c * Math.max(cost - 4.5, 0) / 100, rec = c * Math.max(den - 3, 0) / 100 * 0.6, fmt = n => '$' + Math.round(n).toLocaleString()
  return <div className="fixed inset-0 z-50 grid place-items-center bg-navy/70 p-4" onClick={onClose}><div onClick={e => e.stopPropagation()} className="animate-pop w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl">
    <div className="mb-4 flex justify-between"><h3 className="text-2xl">Savings estimator</h3><button onClick={onClose}><X /></button></div>
    <F l="Monthly collections" v={c} set={setC} min={10000} max={500000} step={5000} suf="$" /><F l="Current billing cost" v={cost} set={setCost} min={4} max={15} step={0.5} suf="%" /><F l="Current denial rate" v={den} set={setDen} min={3} max={25} step={1} suf="%" />
    <div className="grid grid-cols-2 gap-3 text-center"><div className="rounded-xl bg-mist p-4"><b className="font-serif text-2xl text-navy">{fmt(save)}</b><p className="text-xs">saved per month</p></div><div className="rounded-xl bg-mist p-4"><b className="font-serif text-2xl text-navy">{fmt(rec)}</b><p className="text-xs">recovered per month</p></div></div>
    <p className="mt-3 text-xs text-slate-500">Estimate only. Assumes a 4.5% outsourced fee and a 3% target denial rate.</p>
    <Link to="/contact" onClick={onClose} className="mt-4 block rounded-full bg-navy py-3 text-center font-semibold text-white hover:bg-navy2">Get an exact quote</Link></div></div>
}
export function ScrollTop() {
  const [v, setV] = useState(false)
  useEffect(() => { const f = () => setV(scrollY > 400); addEventListener('scroll', f); return () => removeEventListener('scroll', f) }, [])
  return <button aria-label="Scroll to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold text-navy shadow-xl transition-all hover:-translate-y-1 ${v ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}><ArrowUp /></button>
}
