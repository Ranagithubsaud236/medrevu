import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import { PageHeader, Reveal, Card } from '../components/ui.jsx'
import { brand, specialties } from '../data.js'
const req = ['practice', 'first', 'last', 'email', 'phone', 'specialty', 'collection']
export default function Contact() {
  const [v, setV] = useState({}), [err, setErr] = useState({}), [done, setDone] = useState(false)
  const set = k => e => { setV({ ...v, [k]: e.target.value }); setErr({ ...err, [k]: '' }) }
  const submit = e => { e.preventDefault(); const x = {}
    req.forEach(k => { if (!v[k]?.trim()) x[k] = 'This field is required' })
    if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email address'
    if (v.phone && v.phone.replace(/\D/g, '').length < 7) x.phone = 'Enter a valid phone number'
    setErr(x); if (!Object.keys(x).length) setDone(true) }
  const inp = (k, l, p = {}) => <div><label className="text-sm font-semibold">{l}*</label><input value={v[k] || ''} onChange={set(k)} {...p} className={`mt-1 w-full border-b-2 bg-transparent py-2 outline-none transition focus:border-gold ${err[k] ? 'border-red-500' : 'border-slate-300'}`} />{err[k] && <p className="text-xs text-red-600">{err[k]}</p>}</div>
  const sel = (k, l, o) => <div><label className="text-sm font-semibold">{l}*</label><select value={v[k] || ''} onChange={set(k)} className={`mt-1 w-full border-b-2 bg-transparent py-2 outline-none focus:border-gold ${err[k] ? 'border-red-500' : 'border-slate-300'}`}><option value="">Please select</option>{o.map(x => <option key={x}>{x}</option>)}</select>{err[k] && <p className="text-xs text-red-600">{err[k]}</p>}</div>
  return <><PageHeader title="Contact us" sub="We reply within one business day" crumbs={['Contact']} />
    <section className="bg-mist py-14"><div className="mx-auto max-w-2xl px-5"><div className="rounded-2xl bg-white p-8 shadow-xl">
      {done ? <div className="page py-10 text-center"><CheckCircle2 size={56} className="mx-auto text-gold" /><h2 className="mt-4 text-2xl">Thanks, {v.first}!</h2><p className="mt-2 text-slate-600">We received your request and will email you at {v.email} shortly.</p></div> :
        <form onSubmit={submit} noValidate className="space-y-4"><h2 className="text-center text-2xl">Let’s boost your practice revenue</h2>
          {inp('practice', 'Practice name')}<div className="grid gap-4 sm:grid-cols-2">{inp('first', 'First name')}{inp('last', 'Last name')}</div>{inp('email', 'Email', { type: 'email' })}{inp('phone', 'Phone', { type: 'tel' })}
          {sel('specialty', 'Specialty', [...specialties.map(s => s.title), 'Other'])}{sel('collection', 'Monthly collection', ['Under $50k', '$50k – $150k', '$150k – $400k', '$400k+'])}
          <button className="rounded-full bg-navy px-8 py-3 font-semibold text-white transition hover:bg-navy2 hover:shadow-lg">Send request</button></form>}</div></div></section>
    <section className="mx-auto grid max-w-4xl gap-6 px-5 py-16 md:grid-cols-3">{[[Mail, 'Mail here', brand.email], [MapPin, 'Visit here', brand.address], [Phone, 'Call here', brand.phone]].map(([I, t, d], k) => <Reveal key={t} d={k * 100}><Card className="text-center"><span className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-navy text-gold2"><I /></span><h3 className="text-lg">{t}</h3><p className="text-sm text-slate-600">{d}</p></Card></Reveal>)}</section>
    <iframe title="Map" className="h-80 w-full border-0" loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address)}&z=15&output=embed`} /></>
}
