import { useState } from 'react'
import OpenContainerButton from './OpenContainerButton'
import Accordion from './Accordion'

function Container({ isMobile }: { isMobile: boolean }) {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleAccordion = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <div
      id="sectionProfile"
      className="py-40 max-w-screen-lg mx-auto h-3/4 rounded px-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-4xl uppercase font-extrabold mb-4">
            Apprenti Développeur Full Stack
          </h2>
          <h3 className="text-xl text-white uppercase mb-3">
            PHP/Symfony/React
          </h3>
          <p className="mb-6">
            À la recherche d’une alternance 4 jours entreprise / 1 jour
            formation. Préparation d'un Bachelor Concepteur Développeur
            d'application - ISCOD 2024/2025.
          </p>
          <div className="py-3" id="moreSection">
            <OpenContainerButton
              openAccordion={toggleAccordion}
              isOpenAccordion={openAccordion}
            />
            <Accordion openAccordion={openAccordion} />
          </div>
        </div>
        <div
          className={`md:col-span-1 flex justify-center md:justify-end items-center p-4 ${
            openAccordion && isMobile ? 'h-60' : ' h-0 '
          }${
            (openAccordion && !isMobile) || (!openAccordion && !isMobile)
              ? 'h-auto'
              : ''
          }`}>
          <div
            id="image"
            className={`rounded-full shadow-lg overflow-hidden transition-all duration-500 ${
              openAccordion && isMobile
                ? 'w-48 h-60 opacity-100 border-2 border-white'
                : ' w-48 h-0 opacity-0 '
            }${
              (openAccordion && !isMobile) || (!openAccordion && !isMobile)
                ? 'w-64 h-auto opacity-100 border-2 border-white'
                : 'w-64 h-0 opacity-0 '
            }`}>
            <img
              src={require('../assets/user_image.png')}
              alt="Antoine Jolivet"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
