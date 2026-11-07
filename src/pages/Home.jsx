import heroGradient from '../assets/hero-gradient.svg'
import Badge from '../assets/APPBadge.png'
import PlantBasedPic from '../assets/APP_PlantBased_Picture.jpg'
import FermentationPic from '../assets/APP_Fermentation_Picture.jpg'
import CultivatedPic from '../assets/APP_Cultivated_Picture.png'
import { NavLink } from 'react-router-dom'
import CityPic from '../assets/city.png'
import InnovationPic from '../assets/innovation.png'
import NetworkPic from '../assets/tree.png'

const highlights = [
  {
    title: 'Leading Research University',
    text: 'Driving innovation through various research projects in cultivated meat, fermentation and plant based proteins.',
    image: CityPic,
    alt: 'Downtown Toronto illustration',
  },
  {
    title: 'An Innovation Powerhouse',
    text: 'Established startup incubators, with successful companies built in the alt protein field!',
    image: InnovationPic,
    alt: 'Innovation illustration',
  },
  {
    title: 'Networking and Collaboration',
    text: 'Vibrant community of students and researchers eager to learn and collaborate.',
    image: NetworkPic,
    alt: 'Tree of people illustration',
  },
]


const Home = () => {
  return (
    <div>
      {/* this is setting the background gradient + logo + text + buttons */}
      <div
        style={{ backgroundImage: `url("${heroGradient}")` }}
        className="w-full h-130 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center pt-15"
      >
        {/* this works on the logo, white bolded text*/}
        <div>
          <img
            src={Badge}
            alt="UofT Alt Protein Badge"
            className="h-50 mx-auto -translate-y-20"
          />
          <h1 className="-translate-y-10 text-white font-extrabold text-3xl">
            Researching the future of alternative proteins at UofT
          </h1>
        </div>
        {/* this is for the buttons */}
        <div className="flex flex-row gap-65 ">
          <button className="bg-ocean cursor-pointer px-17 py-3 border border-night rounded-4xl font-extrabold text-white">
            Join Us
          </button>
          <button className="bg-ocean cursor-pointer px-17 py-3 border border-night rounded-4xl font-extrabold text-white">
            Events
          </button>
        </div>
      </div>
      {/* this is for the introduction */}
      <div>
        {/* this div is about the blurb at the beginning */}
        <div className="pb-2">
          <h4 className="italic mx-15 text-center pt-7 text-[20px]">
            <span className="font-bold ">
              The Alt Protein Project finds, trains, and empowers student
              leaders at key research universities like the University of
              Toronto to build the academic ecosystems
            </span>{' '}
            in order for the alternative protein field to succeed.
          </h4>
        </div>
      </div>
      {/* this following part is about the small intro to alt proteins + pictures */}
      <div className="py-7">
        <h3 className="font-bold pl-3 text-3xl pb-3">
          What Are Alternative Proteins?
        </h3>

        {/* plant based meat side */}
        <div className="flex items-stretch gap-6">
          {/* image of plant based meat dish */}
          <img
            src={PlantBasedPic}
            alt="Picture of a plant-based meat dish"
            className="block border w-110 max-w-none ml-10"
          />

          {/* short intro paragraph to plant based meat + heading*/}
          <div className="flex-1 px-10 flex flex-col justify-center">
            <h3 className="font-bold text-3xl pb-4">🌱 Plant-based</h3>
            <ul className="list-disc">
              <li className="pl-2 ml-11 text-[26px] leading-relaxed mx-16">
                Proteins from peas, soy, wheat, and more, transformed into
                burgers, nuggets, and milks that look, cook, and that are meant
                to taste like the real thing.
              </li>
            </ul>
          </div>
        </div>

        {/* fermented meat side */}
        <div className="py-10 flex items-stretch gap-6">
          {/* paragraph + hedaer on fermented meat */}
          <div className="flex-1 px-45 flex flex-col justify-center">
            <h3 className="font-bold text-3xl pb-4">🧫 Fermentation</h3>
            <ul className="list-disc">
              <li className="pl-2 ml-11 text-[26px] leading-relaxed">
                Microbes like yeast and fungi turned into tiny food factories,
                producing real dairy proteins, fats, and more.
              </li>
            </ul>
          </div>

          {/* image of fermented meat dish */}
          <img
            src={FermentationPic}
            alt="Picture of a fermented meat dish"
            className="block border w-130 max-w-none mr-10"
          />
        </div>

        {/* cultivated based meat side */}
        <div className="flex items-stretch gap-6">
          {/* image of cultivated meat dish */}
          <img
            src={CultivatedPic}
            alt="Picture of a cultivated meat dish"
            className="block border w-110 max-w-none ml-10"
          />

          {/* short intro paragraph on cultivated meat + heading*/}
          <div className="flex-1 px-10 flex flex-col justify-center">
            <h3 className="font-bold text-3xl pb-4">🔬 Cultivated</h3>
            <ul className="list-disc">
              <li className="pl-2 ml-11 text-[26px] leading-relaxed mr-75">
                Real meat grown from a small sample of animal cells, from cell
                to steak .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 
              the following div is for the "learn more" part and to redirect the user
              to the WhoAreWe page to learn more about alt proteins
          */}
      <div className="flex justify-center py-4">
        <NavLink to={'/WhoAreWe'} className="text-2xl font-bold ">
          [Learn More →]
        </NavLink>
      </div>

      {/* Events sections */}
      <div>
        <h3 className="font-bold pl-3 text-3xl pb-5">Upcoming Events</h3>
        <ul className="list-[square] mx-30">
          {/* Lecture Secires */}
          <li className="text-xl">
            🔬 <span className="font-bold text-sky">Lecture Series:</span> The
            Science of Cultivated Meat
            <ul className="list-[circle] mx-20 my-3">
              <li>
                <span className="font-bold">Things Planned:</span>{' '}
                <ul className="ml-15 list-disc">
                  <li>
                    🎤 Expert talk: Danielle Serra, PhD Candidate in Biomedical
                    Engineering at the University of Toronto, on how synthetic
                    biology and stem cell engineering can make cultivated meat
                    more efficient and affordable
                  </li>
                  <li>
                    💬 Open Q&A: ask your questions directly and learn how to
                    get involved in alt protein research
                  </li>
                  <li>
                    🤝 Networking: meet students interested in food, health, and
                    sustainability
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Location:</span> University of
                Toronto (St. George campus) Medical Sciences Building (Room TBD)
              </li>
              <li>
                <span className="font-bold">Date:</span> Friday, November 27,
                2026
              </li>
              <li>
                <span className="font-bold">Time:</span> 6:00 PM - 7:00 PM
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-center pb-6">
          <button
            className="bg-ocean cursor-pointer px-17 py-3 border border-night rounded-4xl font-extrabold text-white"
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSdPqMb2Um8Mr2qnNvPODyqnKJH6kD90T0_T0PN0Yl3vCRB8bw/viewform',
                '_blank',
                'noopener,noreferrer',
              )
            }
          >
            Sign Up Now!
          </button>
        </div>

        <ul className="list-[square] mx-30">
          {/* Alt Pro Eats */}
          <li className="text-xl">
            {' '}
            🍽️<span className="font-bold text-sky"> Alt-Pro Eats:</span> The
            Nutritional Benefits of Alternative Proteins
            <ul className="list-[circle] mx-20 my-3">
              <li>
                <span className="font-bold">Things Planned:</span>{' '}
                <ul className="ml-15 list-disc">
                  <li>
                    🍽️ Tasting: sample a variety of plant-based meat and dairy
                    alternatives
                  </li>
                  <li>
                    🎤 Expert talk: Dr. Laura Chiavaroli, Assistant Professor of
                    Nutritional Sciences at the University of Toronto, on how
                    these products compare nutritionally to the originals
                  </li>
                  <li>💬 Q&A: ask your questions directly to the speaker!</li>
                  <li>
                    🤝 Networking: meet students interested in food, health, and
                    sustainability
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Location:</span> TBD
              </li>
              <li>
                <span className="font-bold">Date:</span> TBD
              </li>
              <li>
                <span className="font-bold">Time:</span> TBD
              </li>
            </ul>
          </li>

          {/* CAPS */}
          <li className="text-xl">
            🍽️
            <span className="font-bold text-sky">
              {' '}
              Canadian Alternative Protein Symposium (CAPS):
            </span>{' '}
            Coming soon!
          </li>
        </ul>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd7U415Zw5wR16CSaBR_Rx8ZWw4UW2319GGrbU2JiRoIO1IxA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center text-xl font-bold pt-5"
        >
          [Join our newsletter to get updates every month →]
        </a>
      </div>

      {/* Section about UofT */}
      <div>
        <h3 className="font-bold pl-3 text-3xl py-5">
          What makes the University of Toronto a hub?
        </h3>
        <div className='flex flex-row justify-evenly gap-10 px-10 py-10'>
          {highlights.map((item) => (
            <div key={item.title} className='flex flex-col flex-1 items-center'>
              <h3 className='font-bold text-2xl pb-4'>
                {item.title}
              </h3>
              <p className='text-xl pb-6'>
                {item.text}
              </p>
              <img src={item.image} alt={item.alt} className='h-48 mt-auto'/>
              
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home
