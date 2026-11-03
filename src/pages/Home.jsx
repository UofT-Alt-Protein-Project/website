import heroGradient from '../assets/hero-gradient.svg'
import Badge from '../assets/APPBadge.png'
import PlantBasedPic from '../assets/APP_PlantBased_Picture.jpg'
import FermentationPic from '../assets/APP_Fermentation_Picture.jpg'
import CultivatedPic from '../assets/APP_Cultivated_Picture.png'
import { NavLink } from 'react-router-dom'

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
        {/* this following part if about the small intro to alt proteins + pictures */}
        <div className="py-7">
          <h3 className="font-bold pl-3 text-2xl pb-3">
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
                  burgers, nuggets, and milks that look, cook, and that are
                  meant to taste like the real thing.
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
          <NavLink
            to={'/WhoAreWe'}
            className="text-2xl font-bold py-10 flex justify-center"
          >
            [Learn More →]
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
