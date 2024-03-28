import { Link } from 'react-router-dom'
import LogoBlack from '../assets/logo_black.svg'
import LogoExtendBlack from '../assets/logo_extend_black.svg'

function Logo({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="transition-transform duration-300 transform">
      <Link to="/">
        {isMobile ? (
          <img
            src={LogoBlack}
            alt="Logo"
            width="65"
            height="65"
            className="border-white border-2 rounded"
          />
        ) : (
          <img
            src={LogoExtendBlack}
            alt="Logo"
            width="171"
            height="auto"
            className="border-white border-2 rounded"
          />
        )}
      </Link>
    </div>
  )
}

export default Logo
