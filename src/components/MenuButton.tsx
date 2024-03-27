import CrossBlack from '../assets/cross_black.svg'
import BurgerBlack from '../assets/burger_black.svg'

function MenuButton({
  showNavList,
  handleButtonClick,
}: {
  showNavList: boolean
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button onClick={handleButtonClick} className="z-20">
      {showNavList ? (
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
          style={{ opacity: showNavList ? 0 : 1 }}
        />
      )}
    </button>
  )
}

export default MenuButton
