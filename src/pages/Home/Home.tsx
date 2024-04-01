import { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Section from '../../components/Section/Section'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import localData from '../../data/dataSection.json'

interface SectionData {
  id: number
  fullName: string
  title: string
  subtitle: string
  shortDescription: string
  longDescription: string
  thumbnail: string
  github: string
  skills: skills[]
  email: string
  tel: string
  linkedin: string
  link: string
}

interface skills {
  id: number
  skillTitle: string
}

interface LocalData {
  id: number
  bgSection: string
  bgSkill: string
  bgButton: string
  hrefSection: string
  hrefMoreSection: string
  dataType: string
}

function Home() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768)
  const [userData, setUserData] = useState<SectionData | null>(null)
  const [projectsData, setProjectsData] = useState<SectionData[] | []>([])

  const projectsLocalData: LocalData[] = localData.ProjectsData
  const userLocalData: LocalData[] = localData.UserData

  const handleWindowSizeChange = () => {
    const isMobile = window.innerWidth <= 768
    setMobile(isMobile)
  }

  useEffect(() => {
    axios
      .get('https://portfolio.antoine-jolivet.fr/api/users/1')
      .then(response => {
        setUserData(response.data)
      })
      .catch(error => {
        console.error(
          'Erreur lors de la récupération des données utilisateur : ',
          error,
        )
      })
  }, [])

  useEffect(() => {
    axios
      .get('https://portfolio.antoine-jolivet.fr/api/users/1/projects')
      .then(response => {
        setProjectsData(response.data)
      })
      .catch(error => {
        console.error(
          'Erreur lors de la récupération des données utilisateur : ',
          error,
        )
      })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return (
    <>
      <Nav projectsData={projectsData} />
      <main className="relative z-10">
        <Section
          data={userData}
          localData={userLocalData[0]}
          isMobile={isMobile}
        />
        {projectsData &&
          projectsData.map((project, index) => {
            return (
              <Section
                key={index}
                data={project}
                localData={projectsLocalData[index]}
                isMobile={isMobile}
              />
            )
          })}
      </main>
      <Footer
        isMobile={isMobile}
        email={userData?.email}
        tel={userData?.tel}
        linkedin={userData?.linkedin}
      />
    </>
  )
}

export default Home
