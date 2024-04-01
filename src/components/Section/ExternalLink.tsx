function ExternalLink({
  link,
  logo,
  label,
  isMobile,
  buttonColors,
}: {
  link?: string
  logo: string
  label: string
  isMobile: boolean
  buttonColors: string
}) {
  return (
    <div>
      <a
        href={link}
        className={`text-sm background-animate h-10 ${buttonColors} border border-white p-3 rounded uppercase shadow-lg transition-all duration-100 transform hover:-translate-y-0.5  font-bold flex items-center hover:text-white`}>
        {!isMobile && <span>{label}</span>}
        <img
          src={logo}
          alt="Github Logo"
          width="20"
          height="20"
          className={!isMobile ? 'ml-2' : ''}
        />
      </a>
    </div>
  )
}

export default ExternalLink
