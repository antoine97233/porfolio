import { useState } from 'react'
import Accordion from './Accordion'
import GithubLogo from '../../assets/svg/github.svg'
import LinkLogo from '../../assets/svg/link.svg'
import ContainerImage from './ContainerImage'
import ExternalLink from './ExternalLink'
import AccordionButton from './AccordionButton'
import TextContainer from './TextContainer'

interface SectionData {
  id: number
  fullName: string
  title: string
  subtitle: string
  shortDescription: string
  longDescription: string
  thumbnail: string
  github: string
  skills: skills[]
  email: string
  tel: string
  linkedin: string
  link: string
}

interface skills {
  id: number
  skillTitle: string
}

function Section({
  data,
  dataType,
  sectionId,
  sectionColors,
  buttonColors,
  skillColors,
  sectionTitle,
  isMobile,
}: {
  data: SectionData | null
  dataType: string
  sectionId: string
  sectionColors: string[]
  buttonColors: string[]
  skillColors: string[]
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
      className={`md:h-screen md:justify-center flex flex-col items-center w-full relative ${
        dataType === 'project' ? sectionColors[1] : sectionColors[0]
      } ${isMobile ? 'min-h-screen' : ''}`}>
      <div
        id="sectionProfile"
        className="pt-32 pb-10 max-w-screen-lg mx-auto h-3/4 rounded px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <TextContainer
              data={data}
              dataType={dataType}
              skillColors={skillColors}
            />
            <div className="py-3" id="moreSection">
              <div className="ml-2 flex md:flex-row items-center gap-4">
                {data?.longDescription && (
                  <AccordionButton
                    openAccordion={toggleAccordion}
                    isOpenAccordion={openAccordion}
                    buttonColors={buttonColors}
                    dataType={dataType}
                  />
                )}

                {data?.github && (
                  <ExternalLink
                    link={data?.github}
                    logo={GithubLogo}
                    label="Github"
                    isMobile={isMobile}
                    buttonColors={buttonColors}
                    dataType={dataType}
                  />
                )}
                {((dataType === 'project' && data?.link) ||
                  (dataType === 'user' && data?.link) ||
                  (dataType === 'user' && !data?.link)) && (
                  <ExternalLink
                    link={
                      dataType === 'project'
                        ? data?.link
                        : require('../../assets/CV_Antoine_Jolivet.pdf')
                    }
                    logo={LinkLogo}
                    label={dataType === 'project' ? 'link' : 'CV'}
                    isMobile={isMobile}
                    buttonColors={buttonColors}
                    dataType={dataType}
                  />
                )}
              </div>
              {data?.longDescription && (
                <Accordion
                  openAccordion={openAccordion}
                  longDescription={data?.longDescription}
                />
              )}
            </div>
          </div>
          <ContainerImage
            image={data?.thumbnail ?? undefined}
            label={dataType === 'project' ? data?.title : data?.fullName}
            openAccordion={openAccordion}
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  )
}

export default Section
