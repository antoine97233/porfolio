import Arrow from '../../assets/svg/arrow.svg'

function OpenContainerButton({
  openAccordion,
  isOpenAccordion,
}: {
  openAccordion: () => void
  isOpenAccordion: boolean
}) {
  return (
    <div>
      <a
        href={`${isOpenAccordion ? '#moreSection' : '#section1'}`}
        className={`h-10 text-sm bg-violet-500 border border-white p-3 rounded uppercase shadow-lg transition-all duration-100 transform hover:-translate-y-0.5 font-bold flex items-center hover:text-white ${
          isOpenAccordion
            ? 'background-animate bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'background-animate bg-gradient-to-r from-cyan-500 to-blue-500'
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

export default OpenContainerButton
