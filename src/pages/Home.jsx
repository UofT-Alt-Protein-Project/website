import heroGradient from '../assets/hero-gradient.svg'
import Badge from '../assets/APPBadge.png'

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${heroGradient}")` }}
        className="w-full h-130 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
      >
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
        <div className="flex flex-row gap-65 ">
          <button className="bg-ocean cursor-pointer px-17 py-3 border border-night rounded-4xl font-extrabold text-white">
            Join Us
          </button>
          <button className="bg-ocean cursor-pointer px-17 py-3 border border-night rounded-4xl font-extrabold text-white">
            Events
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
