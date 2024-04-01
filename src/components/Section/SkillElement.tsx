function SkillElement({
  title,
  langage,
  bgSkill,
}: {
  title: string
  langage: string
  bgSkill: string
}) {
  return (
    <div className={`border ${bgSkill} p-2 rounded shadow-lg`}>
      <img src={langage} alt={'logo ' + title} width="25" height="25" />
    </div>
  )
}

export default SkillElement
