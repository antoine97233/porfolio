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
        className={`relative border-2 border-white p-3 rounded uppercase shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-bold   ${
          isOpenAccordion ? 'bg-violet-500' : 'bg-violet-400'
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
