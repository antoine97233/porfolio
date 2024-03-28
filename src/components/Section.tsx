function Section({ sectionId, color }: { sectionId: string; color: string }) {
  return (
    <section
      id={sectionId}
      className={`relative w-full h-screen flex justify-center items-center ${color}`}>
      <div className="relative top-5 container bg-white"></div>
    </section>
  )
}

export default Section
