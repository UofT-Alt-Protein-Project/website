// Shown after someone signs up for the newsletter (Zoho redirects here)
import { Link } from 'react-router-dom'

export default function NewsletterThanks() {
  return (
    <section
      className="flex min-h-[70vh] items-center justify-center px-4 py-16"
      style={{
        background: 'linear-gradient(135deg, #008cd1 0%, #3ab1ae 100%)',
      }}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ocean/10 text-4xl">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-ocean">You're subscribed!</h1>

        <p className="mt-4 text-lg text-gray-700">
          Thank you for joining the Alt Protein Project's monthly newsletter.
        </p>

        <p className="mt-3 text-gray-600">
          You'll get event invites, alt protein news, and opportunities straight
          to your inbox.
        </p>

        {/* Spam reminder */}
        <div className="mt-6 rounded-lg bg-sky/10 p-4 text-sm text-gray-700">
          Tip: add{' '}
          <span className="font-semibold">newsletter@uoftaltprotein.ca</span> to
          your contacts so our emails don't end up in junk/spam.
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="cursor-pointer rounded-lg bg-ocean px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            to="/events"
            className="cursor-pointer rounded-lg border-2 border-ocean px-6 py-3 font-semibold text-ocean hover:bg-ocean hover:text-white"
          >
            See Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  )
}
