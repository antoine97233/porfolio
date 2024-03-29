import AnchorLink from './AnchorLink'

function Dropdown({
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
  return (
    <>
      <div className="w-full relative flex justify-center">
        <ul
          className={`transition-all duration-300 rounded ${
            isMobile
              ? ''
              : 'w-full absolute translate-y-2 bg-black shadow-lg border-2 border-white'
          } ${
            showDropdown ? 'h-56 opacity-100' : 'h-0 opacity-0 overflow-hidden'
          }`}>
          <AnchorLink
            page="/"
            anchor="#section1"
            label="Profile"
            closeNavList={closeNavList}
            closeDropdown={closeDropdown}
          />
          <AnchorLink
            page="/"
            anchor="#section2"
            label="Experience"
            closeNavList={closeNavList}
            closeDropdown={closeDropdown}
          />
          <AnchorLink
            page="/"
            anchor="#section2"
            label="School"
            closeNavList={closeNavList}
            closeDropdown={closeDropdown}
          />
          <AnchorLink
            page="/"
            anchor="#section2"
            label="Skills"
            closeNavList={closeNavList}
            closeDropdown={closeDropdown}
          />
          <AnchorLink
            page="/"
            anchor="#section2"
            label="Contact"
            closeNavList={closeNavList}
            closeDropdown={closeDropdown}
          />
        </ul>
      </div>
    </>
  )
}

export default Dropdown
