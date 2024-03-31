import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'

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

function NavLink({
  isMobile,
  label,
  closeNavList,
  showNavList,
  projectsData,
}: {
  isMobile: boolean
  label: string
  closeNavList: () => void
  showNavList: boolean
  projectsData?: SectionData[]
}) {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown)
  }

  useEffect(() => {
    if (!showNavList) {
      setShowDropdown(false)
    }
  }, [showNavList])

  return (
    <li className="relative uppercase flex-col relative flex justify-center items-center w-32">
      <button
        onClick={handleButtonClick}
        className="uppercase px-3 py-7 transition-transform duration-100 transform hover:-translate-y-0.5">
        {label}
      </button>

      <Dropdown
        isMobile={isMobile}
        closeNavList={closeNavList}
        closeDropdown={() => setShowDropdown(false)}
        showDropdown={showDropdown}
        projectsData={projectsData}
      />
    </li>
  )
}

export default NavLink
