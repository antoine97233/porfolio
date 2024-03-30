function ExternalLink({
  link,
  logo,
  label,
  isMobile,
}: {
  link: string
  logo: string
  label: string
  isMobile: boolean
}) {
  return (
    <div>
      <a
        href={link}
        className="text-sm background-animate h-10 bg-gradient-to-r from-cyan-500 to-blue-500  border border-white p-3 rounded uppercase shadow-lg transition-all duration-100 transform hover:-translate-y-0.5  font-bold flex items-center hover:text-white">
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
