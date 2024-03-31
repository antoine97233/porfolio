import AnchorLink from './AnchorLink'

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

function Dropdown({
  isMobile,
  closeNavList,
  closeDropdown,
  showDropdown,
  projectsData,
}: {
  isMobile: boolean
  closeNavList: () => void
  closeDropdown: () => void
  showDropdown: boolean
  projectsData?: SectionData[]
}) {
  return (
    <>
      <div className="w-full relative flex justify-center  ">
        <ul
          className={` transition-all duration-300 overflow-hidden rounded ${
            isMobile
              ? ''
              : 'w-full  absolute translate-y-2 bg-black shadow-lg border '
          } ${
            showDropdown
              ? 'h-24 opacity-100 border'
              : 'h-0 opacity-0 overflow-hidden'
          }`}>
          {projectsData ? (
            projectsData.map((project, index) => (
              <AnchorLink
                key={index}
                anchor={`#project${index + 1}`}
                label={`Project ${index + 1}`}
                closeNavList={closeNavList}
                closeDropdown={closeDropdown}
              />
            ))
          ) : (
            <>
              <AnchorLink
                anchor="#about"
                label="About"
                closeNavList={closeNavList}
                closeDropdown={closeDropdown}
              />
              <AnchorLink
                anchor="#contact"
                label="Contact"
                closeNavList={closeNavList}
                closeDropdown={closeDropdown}
              />
            </>
          )}
        </ul>
      </div>
    </>
  )
}

export default Dropdown
