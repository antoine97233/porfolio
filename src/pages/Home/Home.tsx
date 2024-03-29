import { useEffect, useState } from 'react'
import Section from '../../components/Section'

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
      <Section
        sectionId="section1"
        color="bg-purple-500"
        sectionTitle="About"
        isMobile={isMobile}
      />
    </main>
  )
}

export default Home
