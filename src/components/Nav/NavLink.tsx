import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function NavLink({
  isMobile,
  link,
  linkType,
  label,
  closeNavList,
  showNavList,
}: {
  isMobile: boolean
  link: string
  linkType: string
  label: string
  closeNavList: () => void
  showNavList: boolean
}) {
  const dropdownLink = linkType === 'dropdown'
  const pageLink = linkType === 'page'

  const [showDropdown, setShowDropdown] = useState(false)

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown)
  }

  useEffect(() => {
    if (!showNavList) {
      setShowDropdown(false)
    }
  }, [showNavList])

  if (dropdownLink) {
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
        />
      </li>
    )
  } else if (pageLink) {
    return (
      <li className="uppercase flex justify-center items-center">
        <Link
          to={link}
          onClick={closeNavList}
          className="px-3 py-7 transition-transform duration-100 transform hover:-translate-y-0.5">
          {label}
        </Link>
      </li>
    )
  }

  return null
}

export default NavLink
