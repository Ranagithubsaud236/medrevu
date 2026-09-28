import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { TopBar, Navbar, Footer, Popup, ScrollTop } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import { Listing, Detail } from './pages/Services.jsx'
import { Blog, Post } from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Partner from './pages/Partner.jsx'
import { PageHeader, Btn } from './components/ui.jsx'
import { services, specialties } from './data.js'

function NotFound() {
  return <div className="page"><PageHeader title="Page not found" crumbs={['404']} />
    <div className="py-24 text-center"><p className="mb-6">The page you opened does not exist.</p><Btn to="/">Back to home</Btn></div></div>
}
export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])
  return (<>
    <div className="sticky top-0 z-50"><TopBar /><Navbar /></div>
    <main key={pathname} className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Listing kind="services" items={services} title="Our Services" />} />
        <Route path="/services/:slug" element={<Detail kind="services" items={services} />} />
        <Route path="/specialties" element={<Listing kind="specialties" items={specialties} title="Specialties We Serve" />} />
        <Route path="/specialties/:slug" element={<Detail kind="specialties" items={specialties} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer /><Popup /><ScrollTop />
  </>)
}
