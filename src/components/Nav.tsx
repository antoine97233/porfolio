import { useEffect, useState } from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import NavList from './NavList'

function Nav() {
  const [showNavList, setshowNavList] = useState(false)
  const [isMobile, setMobile] = useState(window.innerWidth <= 768)

  const handleButtonClick = () => {
    setshowNavList(!showNavList)
  }

  const handleDarkButtonClick = () => {
    setshowNavList(!showNavList)
  }

  const handleWindowSizeChange = () => {
    const isMobile = window.innerWidth <= 768
    setshowNavList(false)
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
        <div className="flex justify-start">
          <Logo />
        </div>
        <NavList
          isMobile={isMobile}
          showNavList={showNavList}
          handleDarkButtonClick={handleDarkButtonClick}
          closeNavList={() => setshowNavList(false)}
        />
        <div className="flex justify-end block md:hidden">
          <MenuButton
            showNavList={showNavList}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
