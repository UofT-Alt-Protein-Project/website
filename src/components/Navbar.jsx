import { NavLink } from 'react-router-dom'
import Badge from '../assets/APPBadge.png'

const pages = [
  { name: 'Events', path: '/Events' },
  { name: 'CAPS', path: '/CAPS' },
  { name: 'Who Are We?', path: '/WhoAreWe' },
  { name: 'The Team', path: '/TheTeam' },
  { name: 'Join Us', path: '/JoinUs' },
]

const Navbar = () => {
  return (
    <nav className="flex items-center sticky top-0 z-50 bg-app-gradient w-full py-2 text-white">
      <NavLink to={'/'}>
        <img
          src={Badge}
          alt="UofT Alt Protein Project Badge"
          className="h-20 flex flex-row shrink-0 pl-5"
        />
      </NavLink>

      <ul className="px-10 flex flex-1 flex-row justify-evenly">
        {pages.map((pages) => (
          <li key={pages.path}>
            <NavLink
              to={pages.path}
              className={({ isActive }) => `px-3 py-1 rounded transition ${isActive ? 'bg-white/15 text-ocean' : 'hover:bg-white/10'}`}
            >
              {pages.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
