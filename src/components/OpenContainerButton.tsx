import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function OpenContainerButton({
  openAccordion,
  isOpenAccordion,
}: {
  openAccordion: () => void
  isOpenAccordion: boolean
}) {
  return (
    <div className="mb-8">
      <a
        href={`${isOpenAccordion ? '#moreSection' : '#section1'}`}
        className={`h-10 text-sm bg-violet-500 border border-white p-3 rounded uppercase shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-bold flex items-center ${
          isOpenAccordion
            ? 'background-animate bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'background-animate bg-gradient-to-r from-cyan-500 to-blue-500'
        }`}
        onClick={openAccordion}>
        {isOpenAccordion ? 'Less' : 'More'}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-2 transition-all duration-300 ${
            isOpenAccordion ? 'rotate-180' : 'rotate-0'
          } `}
        />
      </a>
    </div>
  )
}

export default OpenContainerButton
