import AnchorLink from './AnchorLink'

function Dropdown({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <div className="w-full">
          <ul>
            <AnchorLink />
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Dropdown
