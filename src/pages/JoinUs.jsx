import AltProteinDiagram from '../assets/AltProteinDiagram.png'

const JoinUs = () => {
  return (
    <div>
      <h4 className="font-bold px-7 py-10 text-3xl">Why Join Us?</h4>
      
      <p className='px-30 text-lg'>Here are some of the things we do or are working on:</p>
      
      <img
        src={AltProteinDiagram}
        alt="A diagram explaining the different things Alt Protein Project works on"
        className="flex my-7 mx-auto w-250 "
      />

      <button
        onClick={() =>
          window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSdPqMb2Um8Mr2qnNvPODyqnKJH6kD90T0_T0PN0Yl3vCRB8bw/viewform',
            '_blank',
            'noopener,noreferrer',
          )
        }
        className="cursor-pointer block mx-auto bg-ocean rounded-full my-10 py-5 px-100 text-white font-bold text-2xl"
      >
        Join Us Now!
      </button>
    </div>
  )
}

export default JoinUs
