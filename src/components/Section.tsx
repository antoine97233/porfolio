import Container from './Container'

function Section({
  sectionId,
  color,
  sectionTitle,
  isMobile,
}: {
  sectionId: string
  color: string
  sectionTitle: string
  isMobile: boolean
}) {
  return (
    <section
      id={sectionId}
      className={`flex items-center w-full relative ${color} md:h-screen md:justify-center bg-gradient-to-r from-transparent from-5% to-indigo-500`}>
      <Container isMobile={isMobile} />
    </section>
  )
}

export default Section
