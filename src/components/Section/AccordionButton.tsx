import Arrow from '../../assets/svg/arrow.svg'

interface LocalData {
  id: number
  bgSection: string
  bgSkill: string
  bgButton: string
  hrefSection: string
  hrefMoreSection: string
  dataType: string
}
function AccordionButton({
  openAccordion,
  isOpenAccordion,
  isMobile,
  localData,
}: {
  openAccordion: () => void
  isOpenAccordion: boolean
  isMobile: boolean
  localData: LocalData
}) {
  const href = (isOpenAccordion: boolean, isMobile: boolean): string => {
    if (isMobile) {
      return isOpenAccordion ? localData.hrefMoreSection : localData.hrefSection
    } else {
      return isOpenAccordion ? localData.hrefSection : localData.hrefSection
    }
  }

  return (
    <div>
      <a
        href={`#${href(isOpenAccordion, isMobile)}`}
        className={`h-10 text-sm bg-violet-500 border border-white p-3 rounded uppercase shadow-lg transition-all duration-100 transform hover:-translate-y-0.5 font-bold flex items-center hover:text-white ${`background-animate ${localData.bgButton}`}`}
        onClick={openAccordion}>
        {isOpenAccordion ? 'Less' : 'More'}
        <img
          src={Arrow}
          alt="Github Logo"
          width="20"
          height="20"
          className={`ml-2 transition-all duration-300 ${
            isOpenAccordion ? 'rotate-180' : 'rotate-0'
          } `}
        />
      </a>
    </div>
  )
}

export default AccordionButton
