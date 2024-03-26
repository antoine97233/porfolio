function Section({ color }: { color: string }) {
  return (
    <section
      className={`relative w-full h-screen flex justify-center items-center ${color}`}>
      <div className="relative top-5 container bg-white"></div>
    </section>
  )
}

export default Section
