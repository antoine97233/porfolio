import { useState } from 'react'
import Accordion from './Accordion'
import GithubLogo from '../../assets/svg/github.svg'
import LinkLogo from '../../assets/svg/link.svg'
import ContainerImage from './ContainerImage'
import ExternalLink from './ExternalLink'
import AccordionButton from './AccordionButton'
import TextContainer from './TextContainer'
import { Fade } from 'react-awesome-reveal'

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

interface LocalData {
  id: number
  bgSection: string
  bgSkill: string
  bgButton: string
  hrefSection: string
  hrefMoreSection: string
  dataType: string
}

function Section({
  data,
  localData,
  isMobile,
}: {
  data: SectionData | null
  localData: LocalData
  isMobile: boolean
}) {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleAccordion = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <section
      id={localData.hrefSection}
      className={`md:h-screen md:justify-center flex flex-col items-center w-full relative ${
        localData.bgSection
      } ${isMobile ? 'min-h-screen' : ''}`}>
      <div className="pt-32 pb-10 max-w-screen-lg mx-auto h-3/4 rounded px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <Fade>
              <TextContainer data={data} localData={localData} />
            </Fade>

            <div className="py-3" id={localData.hrefMoreSection}>
              <div className="ml-2 flex md:flex-row items-center gap-4">
                {data?.longDescription && (
                  <AccordionButton
                    openAccordion={toggleAccordion}
                    isOpenAccordion={openAccordion}
                    isMobile={isMobile}
                    localData={localData}
                  />
                )}

                {data?.github && (
                  <ExternalLink
                    link={data?.github}
                    logo={GithubLogo}
                    label="Github"
                    isMobile={isMobile}
                    buttonColors={localData.bgButton}
                  />
                )}
                {((localData.dataType === 'project' && data?.link) ||
                  (localData.dataType === 'user' && data?.link) ||
                  (localData.dataType === 'user' && !data?.link)) && (
                  <ExternalLink
                    link={
                      localData.dataType === 'project'
                        ? data?.link
                        : require('../../assets/CV_Antoine_Jolivet.pdf')
                    }
                    logo={LinkLogo}
                    label={localData.dataType === 'project' ? 'link' : 'CV'}
                    isMobile={isMobile}
                    buttonColors={localData.bgButton}
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
          <Fade>
            <ContainerImage
              image={data?.thumbnail ?? undefined}
              label={
                localData.dataType === 'project' ? data?.title : data?.fullName
              }
              openAccordion={openAccordion}
              isMobile={isMobile}
            />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Section
