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

function DropdownProject({
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
  const dropdownClass = `transition-all duration-300 overflow-hidden rounded ${
    isMobile ? '' : 'w-full absolute translate-y-2 bg-black shadow-lg border'
  }  ${
    showDropdown ? 'opacity-100 border h-48' : 'opacity-0 overflow-hidden h-0'
  }`

  return (
    <div className="w-full relative flex justify-center">
      <ul className={dropdownClass}>
        {projectsData &&
          projectsData.map((project, index) => (
            <AnchorLink
              key={index}
              anchor={`#project${index + 1}`}
              label={`Project ${index + 1}`}
              closeNavList={closeNavList}
              closeDropdown={closeDropdown}
            />
          ))}
      </ul>
    </div>
  )
}

export default DropdownProject
