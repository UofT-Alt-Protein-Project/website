// Newsletter sign-up form. Submissions go straight to Zoho Campaigns
// and get added to the "2026-27 APP mailing list".
// NOTE: input names (CONTACT_EMAIL, CONTACT_CF1...) and option text must match Zoho exactly.

import { useState } from 'react'

// Options must match the ones in Zoho word for word
const occupations = [
  'High School Student',
  'Undergraduate Student',
  'Graduate Student or PhD or Postdoc',
  'Early-Career Professional or Recent Grad',
  'Industry Professional or Researcher or Faculty Members',
  'Curious Enthusiast or Community Member',
]

const hopes = [
  'General Updates on chapter news, event announcements, and local alt protein developments',
  'Active Club Involvement by joining departments, volunteering at events, and exec roles',
  'Research and Academics including thesis options, lab positions, grants, and literature',
  'Career and Industry including job postings, internships, startups, and networking events',
  'Community and Networking with likeminded students, researchers, and professionals',
]

const pillars = [
  'Plant Based Foods including crop sciences, formulation, and food sciences',
  'Fermentation including precision fermentation, fungal mycelium, and bioprocessing',
  'Cellular Agriculture including cultured meat, tissue engineering, and bioreactor design',
  'Food Policy, Business, and Sustainability including regulation and consumer adoption',
  'Animal Welfare, Environment, and Climate Change',
]

const inputClass =
  'w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-seaweed'
const labelClass = 'mb-1 block font-semibold text-gray-800'

// Tick/untick a checkbox option
function toggle(list, setList, value) {
  setList(
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
  )
}

export default function NewsletterForm() {
  const [selectedHopes, setSelectedHopes] = useState([])
  const [selectedPillars, setSelectedPillars] = useState([])

  // Make sure at least one box is ticked in each checkbox question
  function handleSubmit(e) {
    if (selectedHopes.length === 0 || selectedPillars.length === 0) {
      e.preventDefault()
      alert('Please select at least one option for each checkbox question.')
    }
  }

  return (
    <form
      method="POST"
      action="https://zvc-zgp.maillist-manage.ca/weboptin.zc"
      target="_blank"
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-8 shadow-lg"
    >
      <div>
        <h2 className="text-3xl font-bold text-ocean">
          UofT APP 26-27 Newsletter Sign-Up
        </h2>
        <p className="mt-2 text-gray-600">
          Whether you're a high school or post-secondary student, early-career
          professional, industry veteran, or curious community member, sign up
          for news, event invites, project updates, and career opportunities.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>First Name *</label>
          <input
            name="FIRSTNAME"
            type="text"
            required
            maxLength="100"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input
            name="LASTNAME"
            type="text"
            required
            maxLength="50"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Email *{' '}
          <span className="font-normal text-gray-500">
            (we'll send the newsletter here)
          </span>
        </label>
        <input
          name="CONTACT_EMAIL"
          type="email"
          required
          maxLength="100"
          className={inputClass}
        />
      </div>

      <fieldset>
        <legend className={labelClass}>
          What is your current occupation? *
        </legend>
        <div className="space-y-2">
          {occupations.map((o) => (
            <label key={o} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="CONTACT_CF1"
                value={o}
                required
                className="cursor-pointer"
              />
              {o}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelClass}>School, Company, or Organization *</label>
        <input
          name="CONTACT_CF2"
          type="text"
          required
          maxLength="300"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          UofT Email{' '}
          <span className="font-normal text-gray-500">
            (if you're a UofT student)
          </span>
        </label>
        <input
          name="CONTACT_CF3"
          type="email"
          maxLength="100"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Major, Faculty/Department, and Year *
        </label>
        <input
          name="CONTACT_CF4"
          type="text"
          required
          maxLength="300"
          placeholder="e.g. Chemical Engineering, FASE, 4th Year (or N/A)"
          className={inputClass}
        />
      </div>

      {/* Ticked options get combined and sent through the hidden input */}
      <fieldset>
        <legend className={labelClass}>
          What are you hoping to get out of our newsletter? *
        </legend>
        <div className="space-y-2">
          {hopes.map((h) => (
            <label key={h} className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 cursor-pointer"
                checked={selectedHopes.includes(h)}
                onChange={() => toggle(selectedHopes, setSelectedHopes, h)}
              />
              {h}
            </label>
          ))}
        </div>
        <input
          type="hidden"
          name="CONTACT_CF5"
          value={selectedHopes.join(';')}
        />
      </fieldset>

      <fieldset>
        <legend className={labelClass}>Pillars of interest *</legend>
        <div className="space-y-2">
          {pillars.map((p) => (
            <label key={p} className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 cursor-pointer"
                checked={selectedPillars.includes(p)}
                onChange={() => toggle(selectedPillars, setSelectedPillars, p)}
              />
              {p}
            </label>
          ))}
        </div>
        <input
          type="hidden"
          name="CONTACT_CF6"
          value={selectedPillars.join(';')}
        />
      </fieldset>

      <div>
        <label className={labelClass}>Any questions or concerns?</label>
        <input
          name="CONTACT_CF7"
          type="text"
          maxLength="300"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-ocean p-3 text-lg font-semibold text-white hover:opacity-90"
      >
        Join Now
      </button>

      {/* Zoho hidden fields - do not edit */}
      <input type="hidden" name="zc_trackCode" value="" />
      <input type="hidden" name="viewFrom" value="URL_ACTION" />
      <input type="hidden" name="submitType" value="optinCustomView" />
      <input type="hidden" name="lD" value="14cf1d6148c4ff1" />
      <input type="hidden" name="emailReportId" value="" />
      <input type="hidden" name="zx" value="1199cb91e7b" />
      <input type="hidden" name="zcvers" value="2.0" />
      <input type="hidden" name="oldListIds" value="" />
      <input type="hidden" name="mode" value="OptinCreateView" />
      <input type="hidden" name="zcld" value="14cf1d6148c4ff1" />
      <input type="hidden" name="zctd" value="14cf1d6148bb779" />
      <input
        type="hidden"
        name="zc_formIx"
        value="3zaabf45afeb366a8abd63029e1f08ae9ec9acd0423e31283e35ea45bc72179db1"
      />
      <input type="hidden" name="scriptless" value="yes" />
    </form>
  )
}
