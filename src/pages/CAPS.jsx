import CAPS2025Pic1 from '../assets/CAPS_2025_Pic1.png'
import CAPS2025Pic2 from '../assets/CAPS_2025_Pic2.jpeg'

const CAPS = () => {
  return (
    <div>
      {/* intro to CAPS */}
      <div>
        <h3 className="font-bold px-3 text-2xl md:text-3xl py-5">Whats is CAPS?</h3>
        <h4 className="px-3 mx-2 sm:mx-8 md:mx-16 lg:mx-30 tracking-wide leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl">
          The{' '}
          <span className="font-bold">
            Canadian Alternative Protein Symposium (CAPS)
          </span>{' '}
          is a one-day conference bringing together industry leaders,
          researchers, and advocates from across Canada to explore the future of
          food. Hosted by Canada’s Alt Protein Project chapters, including the
          University of Toronto, McMaster University, the University of
          Waterloo, and the University of Manitoba, CAPS covers the full journey
          of alternative proteins including cutting-edge research, scaling up in
          industry, safety & regulation, funding, and the ethical & social
          questions shaping the field. Whether you’re a student, researcher,
          professional, or just curious, CAPS is open to everyone, and{' '}
          <span className="font-bold">no prior knowledge is needed. </span>
          Come for the talks, stay for the networking{' '}
          <span className="italic">(and the free food!).</span>
        </h4>
      </div>

      {/* upcoming CAPS */}
      <div>
        <h3 className="font-bold px-3 text-2xl md:text-3xl py-5">Upcoming CAPS</h3>
        <h5 className="font-bold px-3 text-xl md:text-2xl py-5 mx-2 sm:mx-8 md:mx-16 lg:mx-30">CAPS 2027</h5>
        <p className="px-3 mx-2 sm:mx-12 md:mx-28 lg:mx-50 tracking-wide leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl">
          Coming Soon! Stay Tuned!
        </p>
      </div>

      {/* previous CAPS */}
      <div>
        <h3 className="font-bold px-3 text-2xl md:text-3xl py-5">Previous CAPS</h3>

        {/* CAPS 2026 */}
        <div>
          <h5 className="font-bold px-3 text-xl md:text-2xl py-5 mx-2 sm:mx-8 md:mx-16 lg:mx-30">CAPS 2026</h5>

          <p className="px-3 mx-2 sm:mx-12 md:mx-28 lg:mx-50 tracking-wide leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl">
            The Canadian Alternative Protein Symposium (CAPS) brings together
            students, researchers, entrepreneurs, and industry leaders working
            to advance the field of alternative proteins. The symposium features
            keynote talks, research presentations, startup pitches, and
            networking opportunities focused on innovations in sustainable food
            systems, cellular agriculture, plant-based foods, and food
            technology.
          </p>
          <br />
          <p className="px-3 mx-2 sm:mx-12 md:mx-28 lg:mx-50 tracking-wide leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl">
            The poster gallery shows student and researcher work across the
            alternative protein space. Because the field is highly
            interdisciplinary, projects from scientific, technological, policy,
            business, and social perspectives are all welcome!
          </p>
        </div>

        {/* CAPS 2025 */}
        <div>
          <h5 className="font-bold px-3 text-xl md:text-2xl py-5 mx-2 sm:mx-8 md:mx-16 lg:mx-30">CAPS 2025</h5>
          <p className="px-3 mx-2 sm:mx-12 md:mx-28 lg:mx-50 tracking-wide leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl">
            The 2025 Canadian Alternative Protein Symposium is a student-led
            event uniting academia, industry, and government to explore
            cultivated meat, plant-based, and fermentation-derived proteins as
            sustainable food solutions.
          </p>
          <br />
          <p className="px-3 mx-2 sm:mx-12 md:mx-28 lg:mx-50 tracking-wide leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl">
            Hosted by UofT, Waterloo, and McMaster Alt Protein Clubs, this
            day-long symposium features exciting speaker panels on cutting-edge
            research, industry applications, and regulatory challenges. Engage
            in networking sessions and discussions on funding and scaling
            solutions. A great opportunity to explore career pathways in the
            growing alternative protein industry!
          </p>

          {/* images */}
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 py-6 px-4">
            <img
              src={CAPS2025Pic2}
              alt="Picture 2 of 2025 CAPS"
              className="w-full max-w-130 md:w-[45%] h-auto border-2 rounded-2xl"
            />
            <img
              src={CAPS2025Pic1}
              alt="Picture 1 of 2025 CAPS"
              className="w-full max-w-130 md:w-[45%] h-auto border-2 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CAPS
