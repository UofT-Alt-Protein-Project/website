import React from 'react'
import structrue from '../assets/structure.png'
import haleyPic from '../assets/TeamMember26-27/Haley.jpg'
import manasviniPic from '../assets/TeamMember26-27/Manasvini.JPG'
import nicolePic from '../assets/TeamMember26-27/Nicole.jpg'
import crystalPic from '../assets/TeamMember26-27/Crystal.jpg'
import avinPic from '../assets/TeamMember26-27/Avin.jpg'
import keshavPic from '../assets/TeamMember26-27/Keshav.jpeg'
import marcusPic from '../assets/TeamMember26-27/Marcus.jpg'
import reenaPic from '../assets/TeamMember26-27/Reena.JPG'
import mellisaPic from '../assets/TeamMember26-27/Mellisa.png'
import gracePic from '../assets/TeamMember26-27/Grace.jpg'
import bettinaPic from '../assets/TeamMember26-27/Bettina.jpg'
import mohammadPic from '../assets/TeamMember26-27/Mohammad.jpg'
import carinaPic from '../assets/TeamMember26-27/Carina.JPG'
import daniellePic from '../assets/TeamMember26-27/Danielle.png'
import gabrielaPic from '../assets/TeamMember26-27/Gabriela.png'

const categoryColors = {
  president: 'bg-[#3E7F86]',
  finance: 'bg-[#7FA562]',
  marketing: 'bg-[#B4A8D8]',
  director: 'bg-[#FAE5A3]',
  webmaster: 'bg-[#DB9A4E]',
  advisor: 'bg-[#AFC6E6]',
  split: 'bg-[linear-gradient(to_bottom,#FAE5A3_50%,#DB9A4E_50%)]',
}

const members = [
  {
    role: 'Co-president',
    name: 'Haley Ma',
    program: 'Chemical Engineering, 4th Year (2T7 + PEY)',
    photo: haleyPic,
    category: 'president',
  },
  {
    role: 'Co-president',
    name: 'Manasvini Bharath',
    program:
      'Applied Genetics & Biotechnology and Cell & Molecular Biology Double Major, Psychology Minor, 4th Year',
    photo: manasviniPic,
    category: 'president',
  },
  {
    role: 'Treasurer',
    name: 'Nicole Ho',
    program:
      'Economics and Industrial Relations and Human Resources (IRHR), 4th Year',
    photo: nicolePic,
    category: 'finance',
  },
  {
    role: 'Treasurer',
    name: 'Crystal Chen',
    program: 'Industrial Relations & Human Resources + Sociology 4th year',
    photo: crystalPic,
    category: 'finance',
  },
  {
    role: 'Director of Marketing',
    name: 'Avin Ahmadnian',
    program: 'Biology and Chemistry, 3rd year',
    photo: avinPic,
    category: 'marketing',
  },
  {
    role: 'Director of Food & Culinary Partnership',
    name: 'Keshav Sharma',
    program: 'Chemical Engineering 3rd year',
    photo: keshavPic,
    category: 'director',
  },
  {
    role: 'Director of Symposium',
    name: 'Marcus Yang',
    program: 'Chemical Engineering, 3rd year',
    photo: marcusPic,
    category: 'director',
  },
  {
    role: 'Director of Student & Faculty Partnership',
    name: 'Reena Wu',
    program: 'Chemical Engineering, 3rd year',
    photo: reenaPic,
    category: 'director',
  },
  {
    role: 'Director of Student & Faculty Partnership',
    name: 'Mellisa Jiang',
    program: 'Chemical Engineering 2T8+PEY',
    photo: mellisaPic,
    category: 'director',
  },
  {
    role: 'Director of Industry Partnership',
    name: 'Grace MacLeod',
    program: 'Chemical Engineering, 3rd year',
    photo: gracePic,
    category: 'director',
  },
  {
    role: 'Director of Industry Partnership',
    name: 'Bettina Wang',
    program: 'Math and Physical Sciences, 1st Year',
    photo: bettinaPic,
    category: 'director',
  },
  {
    role: 'Webmaster & Director of Food & Culinary Partnership',
    name: 'Mohammad Saiyed',
    program: 'Computer Science, 2nd year',
    photo: mohammadPic,
    category: 'split',
  },
  {
    role: 'Webmaster',
    name: 'Carina Zhang',
    program: 'Data Science and Computer Science, 2nd year',
    photo: carinaPic,
    category: 'webmaster',
  },
]

const advisors = [
  { role: 'Advisor', name: 'Danielle Serra', photo: daniellePic },
  { role: 'Advisor', name: 'Gabriela Araujo', photo: gabrielaPic },
]

const TheTeam = () => {
  return (
    <div>
      <section className="scroll-mt-24 px-6 pt-12 pb-16 md:px-36 md:pt-20">
        <h3 className="font-bold pl-3 text-3xl mb-8"> Meet The Team </h3>
        <img
          src={structrue}
          alt="Team structure"
          className="w-full h-auto border border-gray-400 rounded"
        />
        <div className="max-w-[52rem] mx-auto mt-12 space-y-8">
          {members.map((m) => (
            <div
              key={m.name}
              className={`flex items-start gap-10 px-14 py-8 border border-gray-600 rounded ${categoryColors[m.category]}`}
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-44 h-40 shrink-0 rounded-2xl object-cover"
              />
              <div className="pt-1 text-lg leading-snug">
                <p className="text-xl font-semibold text-black/40">{m.role}</p>
                <p className="text-2xl font-bold">{m.name}</p>
                <p className="mt-2 font-semibold">Program and Year:</p>
                <p className="text-black/60">{m.program}</p>
              </div>
            </div>
          ))}
          {/* Advisors */}
          <div
            className={`flex flex-col gap-8 md:flex-row md:justify-between px-14 py-8 border border-gray-600 rounded ${categoryColors.advisor}`}
          >
            <div className="flex items-start gap-8">
              <img
                src={advisors[0].photo}
                alt={advisors[0].name}
                className="w-44 h-40 shrink-0 rounded-2xl object-cover"
              />
              <div className="pt-1 leading-snug">
                <p className="text-xl font-semibold text-black/40">
                  {advisors[0].role}
                </p>
                <p className="text-2xl font-bold">{advisors[0].name}</p>
              </div>
            </div>
            <div className="flex items-end gap-4">
              <div className="pb-1 leading-snug">
                <p className="text-xl font-semibold text-black/40">
                  {advisors[1].role}
                </p>
                <p className="text-2xl font-bold">{advisors[1].name}</p>
              </div>
              <img
                src={advisors[1].photo}
                alt={advisors[1].name}
                className="w-44 h-40 shrink-0 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TheTeam
