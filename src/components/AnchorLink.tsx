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
    <li className="text-sm flex-col relative flex justify-center items-center">
      <a
        href={page + anchor}
        onClick={handleClick}
        className="p-3 w-full font-semibold hover:bg-white hover:text-black ">
        {label}
      </a>
    </li>
  )
}

export default AnchorLink
