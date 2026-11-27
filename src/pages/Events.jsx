import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import LecInfo from '../assets/EventsPage/LecInfo.png'
import LecAbout from '../assets/EventsPage/LecAbout.png'
import LecSchedule from '../assets/EventsPage/LecSchedule.png'

import labPic from '../assets/EventsPage/cultivated-b-event.png'

const Events = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash, location.key])

  return (
    <div>
      <section>
        {/*2026-2027 Events*/}
        <section
          id="2026-2027"
          className="scroll-mt-24 px-6 pt-12 pb-16 md:px-36 md:pt-20"
        >
          <h3 className="font-bold pl-3 text-3xl mb-8">2026-2027 Events </h3>
          <div className="max-w-6xl md:pl-12">
            <h5 className="font-bold text-2xl mb-4">
              Fall Lecture Series: Engineering Plant Proteins & Peptides
            </h5>
            <div className="space-y-6 text-lg leading-relaxed max-w-6xl">
              <p>
                Please join Dr. Sonu Sharma, an NSERC-CIHR Postdoctoral Fellow
                at the University of Toronto, specializing in food engineering,
                plant protein engineering, and circular bioeconomies at Diosady
                Group. With nine years of academic and industry experience, he
                will present his research, which focuses on upcycling Canadian
                crops and agricultural waste into functional, health-promoting
                proteins and bioactive peptides for type 2 diabetes management.
              </p>
              <p>
                <span aria-hidden="true">📅</span> Date: Friday, November 27th
                2026
                <br />
                <span aria-hidden="true">🕤</span> Time: 6:00 PM - 7:00 PM
                <br />
                <span aria-hidden="true">📌</span> Location: Bahen Centre for
                Information Technology (BA 2185)
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <img
                src={LecInfo}
                alt="Lecture series poster"
                className="w-full rounded-lg"
              />
              <img
                src={LecAbout}
                alt="About the speaker"
                className="w-full rounded-lg"
              />
              <img
                src={LecSchedule}
                alt="Event schedule"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        {/*Past events (2024-2025, 2025-2026)*/}
        <section
          id="past"
          className="scroll-mt-24 px-6 pt-12 pb-16 md:px-36 md:pt-20"
        >
          <h3 className="font-bold pl-3 text-3xl mb-8">
            Past events (2024-2025, 2025-2026){' '}
          </h3>
          <div className="max-w-6xl md:pl-12">
            <h5 className="font-bold text-2xl mb-4">Cultivated-B Lab Tour</h5>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <p className="flex-1 text-lg leading-relaxed">
                The Cultivated B develops bioreactors for the scalable
                production of alternative proteins. We partnered with McMaster
                and Waterloo to offer a presentation and tour of their
                Burlington facility on September 26th from 9:30am-12pm in 2025.
              </p>

              <img
                src={labPic}
                alt="Group photo at the Cultivated B lab tour"
                className="w-full md:w-96 rounded-lg"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Events
