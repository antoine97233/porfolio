import { useState } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function NavLink({
  isMobile,
  link,
  linkType,
  label,
}: {
  isMobile: boolean
  link: string
  linkType: string
  label: string
}) {
  const dropdownLink = linkType === 'dropdown'
  const anchorLink = linkType === 'anchor'
  const pageLink = linkType === 'page'

  const [showDropdown, setShowDropdown] = useState(false)

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown)
  }

  if (dropdownLink) {
    return (
      <li className="flex-col relative flex justify-center items-center">
        <button
          onClick={handleButtonClick}
          className="px-3 py-7 transition-transform duration-300 transform hover:-translate-y-0.5">
          {label}
        </button>
        {showDropdown && <Dropdown isMobile={isMobile} />}
      </li>
    )
  } else if (anchorLink) {
    return (
      <li className=" flex justify-center items-center">
        <a
          href={link}
          className="px-3 py-7 transition-transform duration-300 transform hover:-translate-y-0.5">
          {label}
        </a>
      </li>
    )
  } else if (pageLink) {
    return (
      <li className=" flex justify-center items-center">
        <Link
          to={link}
          className="px-3 py-7 transition-transform duration-300 transform hover:-translate-y-0.5">
          {label}
        </Link>
      </li>
    )
  }

  return null
}

export default NavLink
