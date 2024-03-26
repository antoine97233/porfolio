import { Link } from 'react-router-dom'
import DarkModeButton from './DarkModeButton'
import DropdownLink from './DropdownLink'

function Dropdown({
  mobile,
  showDropdown,
  handleDarkButtonClick,
}: {
  mobile: boolean
  showDropdown: boolean
  handleDarkButtonClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <>
      {mobile ? (
        <div
          className={`position: fixed top-0 right-0 w-full bg-black bg-opacity-75 flex justify-center h-full items-center overflow-hidden transition-opacity duration-300 z-10 ${
            showDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
          <ul className="text-center text-white uppercase font-bold text-xl">
            <li className="py-3">
              <Link to="/">About</Link>
            </li>
            <li className="py-3">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="py-3">
              <DarkModeButton handleDarkButtonClick={handleDarkButtonClick} />
            </li>
          </ul>
        </div>
      ) : (
        <div className="hidden md:block">
          <ul className="text-center text-white uppercase font-light flex text-lg">
            <li className="flex items-center">
              <DropdownLink link="/" label="About" />
            </li>
            <li className="flex items-center">
              <DropdownLink link="/projects" label="Projects" />
            </li>
            <li className="flex items-center">
              <DarkModeButton handleDarkButtonClick={handleDarkButtonClick} />
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Dropdown
