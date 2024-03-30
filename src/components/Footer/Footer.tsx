import Linkedin from '../../assets/svg/linkedin.svg'
import Email from '../../assets/svg/email.svg'
import Phone from '../../assets/svg/phone.svg'

import FooterLink from './FooterLink'

function Footer({ isMobile }: { isMobile: boolean }) {
  return (
    <footer
      id="contact"
      className={`w-full bg-black  h-20 z-20 ${
        isMobile ? 'relative' : 'fixed bottom-0'
      }`}>
      <div className="container relative max-w-screen-lg mx-auto">
        <div className="absolute flex flex-items right-0 gap-4 p-4">
          <FooterLink
            link="test"
            logo={Linkedin}
            label="Linkedin"
            isMobile={isMobile}
          />
          <FooterLink
            link="test"
            logo={Email}
            label="Email"
            isMobile={isMobile}
          />
          <FooterLink
            link="test"
            logo={Phone}
            label="Phone"
            isMobile={isMobile}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
