import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Badge from '../assets/APPBadge.png'

const pages = [
  { name: 'Events', path: '/Events' },
  { name: 'CAPS', path: '/CAPS' },
  { name: 'Who Are We?', path: '/WhoAreWe' },
  { name: 'The Team', path: '/TheTeam' },
  { name: 'Join Us', path: '/JoinUs' },
  { name: 'Newsletter', path: '/newsletter' },
]

const linkClass = ({ isActive }) =>
  `block rounded transition whitespace-nowrap ${isActive ? 'bg-white/15' : 'hover:bg-white/10'}`

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Close the mobile menu if the window is resized to desktop width
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full bg-app-gradient text-white">
      <div className="flex items-center justify-between py-2 px-4 lg:px-5">
        <NavLink to="/" className="shrink-0">
          <img
            src={Badge}
            alt="UofT Alt Protein Project Badge"
            className="h-14 sm:h-18 lg:h-25 w-auto"
          />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex flex-1 flex-row justify-evenly items-center px-6 xl:px-10 gap-2">
          {pages.map((page) => (
            <li key={page.path}>
              <NavLink to={page.path} className={(s) => `${linkClass(s)} px-4 xl:px-5 py-3`}>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile / tablet / narrow windows) */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 rounded hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 border-t border-white/20 pt-2">
          {pages.map((page) => (
            <li key={page.path}>
              <NavLink to={page.path} className={(s) => `${linkClass(s)} px-4 py-3 text-lg`}>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
