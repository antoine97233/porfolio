function SkillElement({ langage }: { langage: string }) {
  return (
    <div className="border bg-violet-500 p-2 rounded shadow-lg">
      <img src={langage} alt="Logo" width="25" height="25" />
    </div>
  )
}

export default SkillElement
