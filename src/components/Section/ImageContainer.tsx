function ImageContainer({
  image,
  label,
  openAccordion,
  isMobile,
  bgButton,
}: {
  image?: string
  label?: string
  openAccordion: boolean
  isMobile: boolean
  bgButton: string
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
        className={`rounded-full pt-2 border max-h-80 shadow-lg overflow-hidden transition-all duration-500 ${
          openAccordion && isMobile
            ? `background-animate w-48 h-60 opacity-100 ${bgButton}`
            : ' w-48 h-0 opacity-0 '
        }${
          (openAccordion && !isMobile) || (!openAccordion && !isMobile)
            ? `background-animate w-64 h-80 opacity-100 ${bgButton}`
            : 'w-64 h-0 opacity-0 '
        } flex justify-center items-center ${!isMobile ? 'h-80' : ''}`}>
        {image ? (
          <img src={image} alt={label} className="max-h-full max-w-full" />
        ) : (
          <span className="text-sm font-bold text-white uppercase">
            No image
          </span>
        )}
      </div>
    </div>
  )
}

export default ImageContainer
