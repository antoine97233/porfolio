import NavLink from './NavLink'

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

interface LocalData {
  id: number
  bgSection: string
  bgSkill: string
  bgButton: string
  hrefSection: string
  hrefMoreSection: string
  dataType: string
}

function NavList({
  isMobile,
  showNavList,
  handleDarkButtonClick,
  closeNavList,
  projectsData,
}: {
  isMobile: boolean
  showNavList: boolean
  handleDarkButtonClick: React.MouseEventHandler<HTMLButtonElement>
  closeNavList: () => void
  projectsData?: SectionData[]
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
              closeNavList={closeNavList}
              showNavList={showNavList}
              label="home"
            />
            <NavLink
              isMobile={isMobile}
              closeNavList={closeNavList}
              showNavList={showNavList}
              projectsData={projectsData}
              label="projects"
            />

            {/* <DarkModeButton handleDarkButtonClick={handleDarkButtonClick} /> */}
          </ul>
        </div>
      ) : (
        <div className="hidden md:block">
          <ul className="text-center text-white uppercase font-light flex text-lg gap-2">
            <NavLink
              isMobile={isMobile}
              closeNavList={closeNavList}
              showNavList={showNavList}
              label="home"
            />
            <NavLink
              isMobile={isMobile}
              closeNavList={closeNavList}
              showNavList={showNavList}
              projectsData={projectsData}
              label="projects"
            />
            {/* <DarkModeButton handleDarkButtonClick={handleDarkButtonClick} /> */}
          </ul>
        </div>
      )}
    </>
  )
}

export default NavList
