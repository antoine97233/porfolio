import Arrow from '../../assets/svg/arrow.svg'

function AccordionButton({
  openAccordion,
  isOpenAccordion,
  buttonColors,
  dataType,
  sectionId,
}: {
  openAccordion: () => void
  isOpenAccordion: boolean
  buttonColors: string[]
  dataType: string
  sectionId: string
}) {
  const href = (
    dataType: string,
    isOpenAccordion: boolean,
    sectionId: string,
  ): string => {
    if (dataType === 'user') {
      return isOpenAccordion ? 'moreSectionUser' : 'about'
    } else if (dataType === 'project') {
      return isOpenAccordion ? `moreSection${sectionId}` : sectionId
    }
    return '#'
  }

  return (
    <div>
      <a
        href={`#${href(dataType, isOpenAccordion, sectionId)}`}
        className={`h-10 text-sm bg-violet-500 border border-white p-3 rounded uppercase shadow-lg transition-all duration-100 transform hover:-translate-y-0.5 font-bold flex items-center hover:text-white ${
          isOpenAccordion
            ? `background-animate ${
                dataType === 'user' ? buttonColors[0] : buttonColors[2]
              }`
            : `background-animate ${
                dataType === 'user' ? buttonColors[1] : buttonColors[3]
              }`
        }`}
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
