import Linkedin from '../../assets/svg/linkedin.svg'
import Email from '../../assets/svg/email.svg'
import Phone from '../../assets/svg/phone.svg'

import FooterLink from './FooterLink'
import TopPageButton from './TopPageButton'

function Footer({
  isMobile,
  email,
  tel,
  linkedin,
}: {
  isMobile: boolean
  email?: string
  tel?: string
  linkedin?: string
}) {
  return (
    <footer
      id="contact"
      className={`w-full bg-black  h-20 z-20 ${
        isMobile ? 'relative' : 'fixed bottom-0'
      }`}>
      <div
        className={`container pt-4 px-4 relative max-w-screen-lg mx-auto flex justify-between ${
          !isMobile ? 'flex-row-reverse' : ''
        }`}>
        <div className="flex gap-2">
          {linkedin && (
            <FooterLink
              link={linkedin}
              logo={Linkedin}
              label="Linkedin"
              isMobile={isMobile}
            />
          )}
          {email && (
            <FooterLink
              link={`mailto:${email}`}
              logo={Email}
              label="Email"
              isMobile={isMobile}
            />
          )}
          {tel && (
            <FooterLink
              link={`tel:${tel}`}
              logo={Phone}
              label="Phone"
              isMobile={isMobile}
            />
          )}
        </div>
        <div>
          <TopPageButton isMobile={isMobile} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
