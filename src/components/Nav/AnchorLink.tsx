function AnchorLink({
  page,
  anchor,
  label,
  closeNavList,
  closeDropdown,
}: {
  page: string
  anchor: string
  label: string
  closeNavList: () => void
  closeDropdown: () => void
}) {
  const handleClick = () => {
    closeNavList()
    closeDropdown()
  }

  return (
    <li className="text-sm  flex-col relative flex justify-center items-center ">
      <a
        href={page + anchor}
        onClick={handleClick}
        className="p-3.5  w-full font-semibold hover:bg-gradient-to-r background-animate from-cyan-500 to-blue-500 hover:text-black ">
        {label}
      </a>
    </li>
  )
}

export default AnchorLink
