import CrossBlack from '../../assets/svg/cross.svg'
import BurgerBlack from '../../assets/svg/burger.svg'

function MenuButton({
  showNavList,
  handleButtonClick,
}: {
  showNavList: boolean
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button onClick={handleButtonClick} className="z-20 relative ">
      <img
        src={BurgerBlack}
        alt="Burger"
        className={`menu-icon  transition-all duration-200 ${
          showNavList
            ? 'absolute opacity-0 transform translate-x-1/2 '
            : 'opacity-100 absolute'
        }`}
        width="65"
        height="65"
      />
      <img
        src={CrossBlack}
        alt="Cross"
        className={`menu-icon  transition-all duration-200 ${
          showNavList ? 'opacity-100 transform -translate-x-1/6 ' : 'opacity-0 '
        }`}
        width="65"
        height="65"
      />
    </button>
  )
}

export default MenuButton
