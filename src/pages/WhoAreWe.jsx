import React from 'react'
import map from '../assets/map.png'
import PlantBasedPic from '../assets/APP_PlantBased_Picture.jpg'
import FermentationPic from '../assets/APP_Fermentation_Picture.jpg'
import CultivatedPic from '../assets/APP_Cultivated_Picture.png'

const altProteins = [
  {
    title: 'Plant-based Meat',
    image: PlantBasedPic,
    alt: 'Plant-based cutlet with broccoli and lemon',
    summary:
      'Plant-based meat, eggs, and dairy are produced directly from plants.',
    detail:
      'Like animal products, they are composed of protein, fat, vitamins, minerals, and water. Next-gen plant-based options look, taste, and cook like conventional meat, and offer complex carbs and fiber.',
  },
  {
    title: 'Cultivated Meat',
    image: CultivatedPic,
    alt: 'Fried cultivated chicken on greens',
    summary: 'Cultivated meat is produced directly from animal cells.',
    detail:
      'Meat cultivation facilitates the same biological process that happens inside an animal by providing cells with the warmth and basic nutrients required to build muscle and fat.',
  },
  {
    title: 'Fermented Meat',
    image: FermentationPic,
    alt: 'Bowl of fermentation-derived jerky',
    summary:
      'Fermentation is an enabling technology for the alternative protein industry that allows the production of standalone protein sources or functional ingredients.',
    detail:
      'Microorganisms, such as filamentous fungi and bacteria, can be programmed to express specific proteins or fats, or their entire protein biomass can be harvested.',
  },
]

const WhoAreWe = () => {
  return (
    <div>
      {/* About Us */}
      <div>
        <section className="px-6 pt-12 pb-16 md:px-36 md:pt-20">
          <h3 className="font-bold pl-3 text-3xl mb-8">About Us </h3>
          <div className="space-y-6 text-lg leading-relaxed max-w-6xl md:pl-12">
            <p>
              We’re a chapter of a global student movement established by the
              Good Food Institute, which is a nonprofit that promotes
              sustainable, secure, and just protein supply. Current meat, egg,
              and dairy production is unsustainable and inefficient. It is a key
              driver of climate change, environmental degradation, and
              antibiotic resistance. We aimed to create meat, eggs, and dairy
              more sustainably and efficiently by making them from plants,
              producing them by fermentation, or cultivating them directly from
              cells.
            </p>
            <p>
              The Alt Protein Project finds, trains, and empowers student
              leaders at key research universities to build the academic
              ecosystems needed for the alternative protein field to succeed. It
              currently has over 80 groups across 20+ countries.
            </p>
          </div>
        </section>

        {/* images */}
        <div className="flex flex-row justify-evenly py-6">
          <img
            src={map}
            alt="map of APP groups around the world"
            className="w-160 h-auto rounded-2xl"
          />
        </div>

        {/* What is Alternative Protein */}
        <section className="px-6 pt-12 pb-16 md:px-36 md:pt-20">
          <h3 className="font-bold pl-3 text-3xl mb-8">
            What is Alternative Protein
          </h3>
          <div className="grid gap-12 md:grid-cols-[minmax(0,28rem)_1fr]">
            <div className="space-y-10">
              {altProteins.map((item) => (
                <figure key={item.title}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto border border-gray-400 rounded"
                  />
                  <figcaption className="mt-5 text-center text-lg font-bold">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>

            <ul className="list-disc pl-5 space-y-12 text-lg">
              {altProteins.map((item) => (
                <li key={item.title} className="font-bold">
                  {item.title}
                  <ul className="list-[circle] pl-8 mt-3 space-y-2 leading-loose">
                    <li>{item.summary}</li>
                    <li className="font-normal">{item.detail}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WhoAreWe
