import { useEffect, useState } from 'react'
import UserContainer from '../../components/UserContainer'
import Contact from '../../components/Contact'

function Home() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768)

  const handleWindowSizeChange = () => {
    const isMobile = window.innerWidth <= 768
    setMobile(isMobile)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return (
    <main className="relative z-10">
      <UserContainer
        sectionId="section1"
        color="bg-purple-500"
        sectionTitle="About"
        isMobile={isMobile}
      />
      <Contact isMobile={isMobile} />
    </main>
  )
}

export default Home
