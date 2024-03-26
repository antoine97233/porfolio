import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faSearch,
  faEnvelope,
  faBell,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black h-10 z-20 text-white">
      <div className="container mx-auto">
        <ul className="flex justify-between h-10">
          <li className="flex-1 flex items-center justify-center transition-transform duration-300 transform hover:-translate-y-0.5">
            <button className="hidden md:flex uppercase">About</button>
            <FontAwesomeIcon icon={faHome} className="md:hidden" />
          </li>
          <li className="flex-1 flex items-center justify-center transition-transform duration-300 transform hover:-translate-y-0.5">
            <button className="hidden md:flex uppercase">Skills</button>
            <FontAwesomeIcon icon={faSearch} className="md:hidden" />
          </li>
          <li className="flex-1 flex items-center justify-center transition-transform duration-300 transform hover:-translate-y-0.5">
            <button className="hidden md:flex uppercase">Experiences</button>
            <FontAwesomeIcon icon={faEnvelope} className="md:hidden" />
          </li>
          <li className="flex-1 flex items-center justify-center transition-transform duration-300 transform hover:-translate-y-0.5">
            <button className="hidden md:flex uppercase">School</button>
            <FontAwesomeIcon icon={faBell} className="md:hidden" />
          </li>
          <li className="flex-1 flex items-center justify-center transition-transform duration-300 transform hover:-translate-y-0.5">
            <button className="hidden md:flex uppercase">Contact</button>
            <FontAwesomeIcon icon={faUser} className="md:hidden" />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
