function SkillElement({
  title,
  langage,
  dataType,
  skillColors,
}: {
  title: string
  langage: string
  dataType: string
  skillColors: string
}) {
  return (
    <div className={`border ${skillColors} p-2 rounded shadow-lg`}>
      <img src={langage} alt={'logo ' + title} width="25" height="25" />
    </div>
  )
}

export default SkillElement
