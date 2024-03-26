import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import Logo from './Logo'
import MenuButton from './MenuButton'

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [mobile, setMobile] = useState(window.innerWidth <= 768)

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown)
  }

  const handleDarkButtonClick = () => {
    setShowDropdown(!showDropdown)
  }

  const handleWindowSizeChange = () => {
    const isMobile = window.innerWidth <= 768
    setShowDropdown(false)
    setMobile(isMobile)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-black h-20 z-20 ">
      <div className="container mx-auto px-2 sm:px-3 flex items-center justify-between h-20">
        {' '}
        <div className="flex justify-start">
          <Logo />
        </div>
        <Dropdown
          mobile={mobile}
          showDropdown={showDropdown}
          handleDarkButtonClick={handleDarkButtonClick}
        />
        <div className="flex justify-end block md:hidden">
          <MenuButton
            showDropdown={showDropdown}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
