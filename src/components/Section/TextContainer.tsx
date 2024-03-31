import SkillElement from './SkillElement'
import SymfonyLogo from '../../assets/svg/symfony.svg'
import NestJsLogo from '../../assets/svg/nestjs.svg'
import PhpLogo from '../../assets/svg/php.svg'
import ReactLogo from '../../assets/svg/react.svg'
import TypescriptLogo from '../../assets/svg/Typescript.svg'
import JavascriptLogo from '../../assets/svg/javascript.svg'

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

function TextContainer({
  data,
  dataType,
  skillColors,
}: {
  data: SectionData | null
  dataType: string
  skillColors: string[]
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
      {data && (
        <>
          {dataType === 'project' && data.title && (
            <h1 className="text-5xl uppercase font-extrabold mb-4">
              {data.title}
            </h1>
          )}
          {data.subtitle && (
            <h2 className="text-xl text-white uppercase  mb-6">
              {data.subtitle}
            </h2>
          )}
          <div className="mb-6 flex gap-2">
            {data.skills.map(skill => (
              <SkillElement
                key={skill.id}
                title={skill.skillTitle}
                langage={skillLogos[skill.skillTitle]}
                dataType={dataType}
                skillColors={skillColors}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default TextContainer
