import { Link } from 'react-router-dom'
import LogoBlack from '../../assets/svg/logo.svg'

function Logo() {
  return (
    <div className="transition-transform duration-300 transform">
      <Link to="/">
        <img
          src={LogoBlack}
          alt="Logo"
          width="65"
          height="65"
          className="background-animate hover:bg-gradient-to-r from-cyan-500 to-blue-500 border-white border rounded"
        />
      </Link>
    </div>
  )
}

export default Logo
