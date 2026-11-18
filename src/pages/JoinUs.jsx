import AltProteinDiagram from '../assets/AltProteinDiagram.png'

const JoinUs = () => {
  return (
    <div>
      <h4 className="font-bold px-4 md:px-7 py-6 md:py-10 text-2xl md:text-3xl">Why Join Us?</h4>

      <p className='px-6 sm:px-12 md:px-30 text-base md:text-lg'>Here are some of the things we do or are working on:</p>

      <img
        src={AltProteinDiagram}
        alt="A diagram explaining the different things Alt Protein Project works on"
        className="block my-7 mx-auto w-[calc(100%-2rem)] max-w-250"
      />

      <button
        onClick={() =>
          window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSdPqMb2Um8Mr2qnNvPODyqnKJH6kD90T0_T0PN0Yl3vCRB8bw/viewform',
            '_blank',
            'noopener,noreferrer',
          )
        }
        className="cursor-pointer block mx-auto bg-ocean rounded-full my-10 py-4 md:py-5 px-12 sm:px-24 md:px-50 lg:px-100 text-white font-bold text-xl md:text-2xl"
      >
        Join Us Now!
      </button>
    </div>
  )
}

export default JoinUs
