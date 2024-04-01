import { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Section from '../../components/Section/Section'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import themesData from '../../data/themes.json'

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

interface ThemeData {
  id: number
  section: string
  skill: string
  button: string
}

function Home() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768)
  const [userData, setUserData] = useState<SectionData | null>(null)
  const [projectsData, setProjectsData] = useState<SectionData[] | []>([])

  const ProjectThemes: ThemeData[] = themesData.ProjectsTheme
  const UserTheme: ThemeData[] = themesData.UserTheme

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
          dataType="user"
          sectionId="about"
          theme={UserTheme[0]}
          isMobile={isMobile}
        />
        {projectsData &&
          projectsData.map((project, index) => {
            return (
              <Section
                key={index}
                data={project}
                dataType="project"
                sectionId={`project${index + 1}`}
                theme={ProjectThemes[index]}
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
