import { NavLink } from 'react-router-dom'

const pages = [
  { name: 'Events', path: '/Events' },
  { name: 'CAPS', path: '/CAPS' },
  { name: 'Who Are We?', path: '/WhoAreWe' },
  { name: 'The Team', path: '/TheTeam' },
  { name: 'Join Us', path: '/JoinUs' },
]

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-app-gradient w-full py-12 text-white'>
            <ul className='px-10 flex flex-row gap-10'>
                {pages.map( pages => (<li key={pages.path}>{pages.name}</li>) )}
            </ul>
        </nav>
    )
}

export default Navbar