import AnchorLink from './AnchorLink'

function DropdownUser({
  isMobile,
  closeNavList,
  closeDropdown,
  showDropdown,
}: {
  isMobile: boolean
  closeNavList: () => void
  closeDropdown: () => void
  showDropdown: boolean
}) {
  const dropdownClass = `transition-all duration-300 overflow-hidden rounded ${
    isMobile ? '' : 'w-full absolute translate-y-2 bg-black shadow-lg border'
  }  ${
    showDropdown ? 'opacity-100 border h-24' : 'opacity-0 overflow-hidden h-0'
  }`

  return (
    <div className="w-full relative flex justify-center">
      <ul className={dropdownClass}>
        <>
          <AnchorLink
            anchor="#about"
            label="About"
            closeNavList={closeNavList}
            closeDropdown={closeDropdown}
          />
          <AnchorLink
            anchor="#contact"
            label="Contact"
            closeNavList={closeNavList}
            closeDropdown={closeDropdown}
          />
        </>
      </ul>
    </div>
  )
}

export default DropdownUser
