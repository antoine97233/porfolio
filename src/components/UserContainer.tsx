import { useState } from 'react'
import OpenContainerButton from './OpenContainerButton'
import Accordion from './Accordion'
import UserImage from './UserImage'
import SkillElement from './SkillElement'
import React from '../assets/react.svg'
import NestJs from '../assets/nestjs.svg'
import Symfony from '../assets/symfony.svg'
import ExternalLink from './ExternalLink'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Cv from '../assets/cv.svg'

function UserContainer({
  sectionId,
  color,
  isMobile,
}: {
  sectionId: string
  color: string
  sectionTitle: string
  isMobile: boolean
}) {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleAccordion = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <section
      id={sectionId}
      className={`flex flex-col items-center w-full relative ${color} md:h-screen md:justify-center bg-gradient-to-r from-transparent from-5% to-indigo-500`}>
      <div
        id="sectionProfile"
        className="py-32 max-w-screen-lg mx-auto h-3/4 rounded px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="text-5xl uppercase font-extrabold mb-4">
              Antoine Jolivet
            </h1>
            <h2 className="text-xl text-white uppercase  mb-6">
              Apprenti développeur Full Stack
            </h2>
            <div className="mb-6 flex gap-2">
              <SkillElement langage={React} />
              <SkillElement langage={NestJs} />
              <SkillElement langage={Symfony} />
            </div>

            <p className="mb-6 leading-6">
              À la recherche d’une alternance 4 jours entreprise / 1 jour
              formation. Préparation d'un Bachelor Concepteur Développeur
              d'application - ISCOD 2024/2025.
            </p>
            <div className="py-3" id="moreSection">
              <div className="ml-2 flex md:flex-row items-center gap-4">
                <OpenContainerButton
                  openAccordion={toggleAccordion}
                  isOpenAccordion={openAccordion}
                />
                <ExternalLink
                  link="test"
                  logo={Github}
                  label="Github"
                  isMobile={isMobile}
                />
                <ExternalLink
                  link="test"
                  logo={Linkedin}
                  label="Linkedin"
                  isMobile={isMobile}
                />
                <ExternalLink
                  link="test"
                  logo={Cv}
                  label="CV"
                  isMobile={isMobile}
                />
              </div>
              <Accordion openAccordion={openAccordion} />
            </div>
          </div>
          <UserImage openAccordion={openAccordion} isMobile={isMobile} />
        </div>
      </div>
    </section>
  )
}

export default UserContainer
