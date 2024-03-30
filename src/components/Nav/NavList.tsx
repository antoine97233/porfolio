import DarkModeButton from '../DarkModeButton'
import NavLink from './NavLink'

function NavList({
  isMobile,
  showNavList,
  handleDarkButtonClick,
  closeNavList,
}: {
  isMobile: boolean
  showNavList: boolean
  handleDarkButtonClick: React.MouseEventHandler<HTMLButtonElement>
  closeNavList: () => void
}) {
  return (
    <>
      {isMobile ? (
        <div
          className={`position: fixed top-0 right-0 w-full bg-black bg-opacity-90 flex justify-center h-full items-center overflow-hidden transition-opacity duration-300 z-10 ${
            showNavList ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
          <ul className="text-center text-white font-bold text-xl">
            <NavLink
              isMobile={isMobile}
              link="/"
              linkType="dropdown"
              label="Home"
              closeNavList={closeNavList}
              showNavList={showNavList}
            />
            <NavLink
              isMobile={isMobile}
              link="/projects"
              linkType="page"
              label="Projects"
              closeNavList={closeNavList}
              showNavList={showNavList}
            />
            {/* <DarkModeButton handleDarkButtonClick={handleDarkButtonClick} /> */}
          </ul>
        </div>
      ) : (
        <div className="hidden md:block">
          <ul className="text-center text-white uppercase font-light flex text-lg">
            <NavLink
              isMobile={isMobile}
              link="/"
              linkType="dropdown"
              label="Home"
              closeNavList={closeNavList}
              showNavList={showNavList}
            />
            <NavLink
              isMobile={isMobile}
              link="/projects"
              linkType="page"
              label="Projects"
              closeNavList={closeNavList}
              showNavList={showNavList}
            />
            {/* <DarkModeButton handleDarkButtonClick={handleDarkButtonClick} /> */}
          </ul>
        </div>
      )}
    </>
  )
}

export default NavList