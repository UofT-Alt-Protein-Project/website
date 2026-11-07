import { NavLink } from 'react-router-dom'
import Badge from '../assets/APPBadge.png'

const leftMenu = [
  { name: 'Join Us', path: '/JoinUs' },
  {
    name: 'Who Are We?',
    path: '/WhoAreWe',
    children: [
      { name: 'About Us', path: '/WhoAreWe/AboutUs' },
      { name: 'What is Alternative Protein', path: '/WhoAreWe/WhatIsAltProtein' },
      { name: 'Why Alternative Protein', path: '/WhoAreWe/WhyAltProtein' },
      { name: '3 Key Objectives for the Year', path: '/WhoAreWe/Objectives' },
    ],
  },
]

const middleMenu = [
  { name: 'CAPS', path: '/CAPS' },
  {
    name: 'Events',
    path: '/Events',
    children: [
      { name: '2026-2027 Event', path: '/Events/2026-2027'},
      { name: 'Past events (2024-2025, 2025-2026)', path: '/Events/Past'},
    ],
  },
  { name: 'The Team', path: '/TheTeam' },
  { name: 'Contact Us', path: '/ContactUs' },
]

const linkClass = ({ isActive }) =>
  `transition ${isActive ? 'text-ocean' : 'hover:underline'}`

const MenuList = ({ items, nested = false }) => (
  <ul
    className={
      nested
        ? 'mt-3 ml-5 list-[circle] space-y-3'
        : 'list-disc pl-5 space-y-3.5'
    }
  >
    {items.map((item) => (
      <li
        key={item.path}
        className={nested ? 'text-[17px] font-normal' : 'text-xl font-bold'}
      >
        <NavLink to={item.path} className={linkClass}>
          {item.name}
        </NavLink>
        {item.children && <MenuList items={item.children} nested />}
      </li>
    ))}
  </ul>
)

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 w-full bg-app-gradient text-white px-6 py-8 md:px-20 md:py-10">
      <MenuList items={leftMenu} />
      <MenuList items={middleMenu} />

      <div className="text-center">
        <NavLink to="/" className="flex items-center justify-center gap-3">
          <img
            src={Badge}
            alt="UofT Alt Protein Project Badge"
            className="h-20 shrink-0"
          />
          <div className="text-left">
            <div className="text-2xl">The Alt Protein Project</div>
            <strong className="text-2xl">University of Toronto</strong>
          </div>
        </NavLink>

        <p className="text-[22px] my-5">Sign-Up for our monthly newsletter!</p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd7U415Zw5wR16CSaBR_Rx8ZWw4UW2319GGrbU2JiRoIO1IxA/viewform"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#265563] hover:bg-[#1c424d] text-white text-[22px] font-bold rounded-full px-12 py-4 transition"
        >
          Sign-Up
        </a>
      </div>
    </footer>
  )
}

export default Footer
