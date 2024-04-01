import SkillElement from './SkillElement'
import SymfonyLogo from '../../assets/svg/symfony.svg'
import NestJsLogo from '../../assets/svg/nestjs.svg'
import PhpLogo from '../../assets/svg/php.svg'
import ReactLogo from '../../assets/svg/react.svg'
import TypescriptLogo from '../../assets/svg/Typescript.svg'
import JavascriptLogo from '../../assets/svg/javascript.svg'
import { Fade, Slide } from 'react-awesome-reveal'

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

interface LocalData {
  id: number
  bgSection: string
  bgSkill: string
  bgButton: string
  hrefSection: string
  hrefMoreSection: string
  dataType: string
}

interface skills {
  id: number
  skillTitle: string
}

function Title({
  data,
  dataType,
}: {
  data: SectionData | null
  dataType: string
}) {
  if (data) {
    return (
      <h1 className="text-5xl uppercase font-extrabold mb-4">
        {dataType === 'project'
          ? data.title || 'No title'
          : data.fullName || 'No username'}
      </h1>
    )
  }
  return (
    <h1 className="text-5xl uppercase font-extrabold mb-4">Not mentionned</h1>
  )
}

function Subtitle({
  data,
  dataType,
}: {
  data: SectionData | null
  dataType: string
}) {
  if (data) {
    return (
      <h2 className="text-xl text-white uppercase mb-6">
        {dataType === 'project'
          ? data.subtitle || 'No subtitle'
          : data.title || 'No title'}
      </h2>
    )
  }
  return <h2 className="text-xl text-white uppercase mb-6">Not mentionned</h2>
}

function ShortDescription({ data }: { data: SectionData | null }) {
  return (
    <p className="mb-6 leading-6">
      {data ? data.shortDescription || 'No description' : 'Not mentionned'}
    </p>
  )
}

function TextContainer({
  data,
  localData,
}: {
  data: SectionData | null
  localData: LocalData
}) {
  const skillLogos: { [key: string]: any } = {
    React: ReactLogo,
    Symfony: SymfonyLogo,
    NestJS: NestJsLogo,
    PHP: PhpLogo,
    Typescript: TypescriptLogo,
    Javascript: JavascriptLogo,
  }

  return (
    <>
      <Fade>
        <Slide direction="up">
          <Title data={data} dataType={localData.dataType} />
          <Subtitle data={data} dataType={localData.dataType} />
        </Slide>
      </Fade>

      <div className="mb-6 flex gap-2">
        {data?.skills.map(skill => (
          <SkillElement
            key={skill.id}
            title={skill.skillTitle}
            langage={skillLogos[skill.skillTitle]}
            bgSkill={localData.bgSkill}
          />
        ))}
      </div>
      <ShortDescription data={data} />
    </>
  )
}

export default TextContainer
