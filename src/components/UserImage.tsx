function UserImage({
  openAccordion,
  isMobile,
}: {
  openAccordion: boolean
  isMobile: boolean
}) {
  return (
    <div
      className={`md:col-span-1 flex justify-center md:justify-end items-center p-4 ${
        openAccordion && isMobile ? 'h-64' : ' h-0 '
      }${
        (openAccordion && !isMobile) || (!openAccordion && !isMobile)
          ? 'h-auto'
          : ''
      }`}>
      <div
        id="image"
        className={`rounded-full border shadow-lg overflow-hidden transition-all duration-500 ${
          openAccordion && isMobile
            ? 'background-animate w-48 h-60 opacity-100 bg-gradient-to-r from-cyan-500 to-blue-500'
            : ' w-48 h-0 opacity-0 '
        }${
          (openAccordion && !isMobile) || (!openAccordion && !isMobile)
            ? 'background-animate w-64 h-auto opacity-100 bg-gradient-to-r from-cyan-500 to-blue-500'
            : 'w-64 h-0 opacity-0 '
        }`}>
        <img src={require('../assets/user_image.png')} alt="Antoine Jolivet" />
      </div>
    </div>
  )
}

export default UserImage
