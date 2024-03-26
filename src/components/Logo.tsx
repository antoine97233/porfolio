import { Link } from 'react-router-dom'
import LogoBlack from '../assets/logo_black.svg'

function Logo() {
  return (
    <div className="transition-transform duration-300 transform hover:-translate-y-0.5">
      <Link to="/">
        <img
          src={LogoBlack}
          alt="Logo"
          width="65"
          height="65"
          className="border-white border-2"
        />
      </Link>
    </div>
  )
}

export default Logo
