import { useState, useEffect } from 'react'
import ArrowUp from '../../assets/svg/arrowUp.svg'

function TopPageButton({ isMobile }: { isMobile: boolean }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`text-sm text-white background-animate h-10 w-15 border border-white p-3 rounded transition-all duration-500 transform hover:-translate-y-0.5  font-bold flex items-center cursor-pointer ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isMobile ? 'fixed bottom-6 right-5 ' : ''}`}
      onClick={scrollToTop}>
      <img src={ArrowUp} alt="topPageLogo" width="25" height="25" />
    </div>
  )
}

export default TopPageButton
