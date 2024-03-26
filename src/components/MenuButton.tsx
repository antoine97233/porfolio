import CrossBlack from '../assets/cross_black.svg'
import BurgerBlack from '../assets/burger_black.svg'

function MenuButton({
  showDropdown,
  handleButtonClick,
}: {
  showDropdown: boolean
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button onClick={handleButtonClick} className="z-20">
      {showDropdown ? (
        <img
          src={CrossBlack}
          alt="Cross"
          className="menu-icon"
          width="65"
          height="65"
        />
      ) : (
        <img
          src={BurgerBlack}
          alt="Burger"
          className="menu-icon"
          width="65"
          height="65"
          style={{ opacity: showDropdown ? 0 : 1 }}
        />
      )}
    </button>
  )
}

export default MenuButton
