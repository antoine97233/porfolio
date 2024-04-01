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

interface ThemeData {
  id: number
  section: string
  skill: string
  button: string
}

function Section({
  data,
  dataType,
  sectionId,
  theme,
  isMobile,
}: {
  data: SectionData | null
  dataType: string
  sectionId: string
  theme: ThemeData
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
        theme.section
      } ${isMobile ? 'min-h-screen' : ''}`}>
      <div className="pt-32 pb-10 max-w-screen-lg mx-auto h-3/4 rounded px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <Fade>
              <TextContainer
                data={data}
                dataType={dataType}
                skillColors={theme.skill}
              />
            </Fade>

            <div
              className="py-3"
              id={
                dataType === 'user'
                  ? 'moreSectionUser'
                  : 'moreSection' + sectionId
              }>
              <div className="ml-2 flex md:flex-row items-center gap-4">
                {data?.longDescription && (
                  <AccordionButton
                    openAccordion={toggleAccordion}
                    isOpenAccordion={openAccordion}
                    buttonColors={theme.button}
                    dataType={dataType}
                    sectionId={sectionId}
                    isMobile={isMobile}
                  />
                )}

                {data?.github && (
                  <ExternalLink
                    link={data?.github}
                    logo={GithubLogo}
                    label="Github"
                    isMobile={isMobile}
                    buttonColors={theme.button}
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
                    buttonColors={theme.button}
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
              label={dataType === 'project' ? data?.title : data?.fullName}
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
