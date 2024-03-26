import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons' // Assurez-vous d'importer l'icône que vous souhaitez utiliser

function DarkModeButton({
  handleDarkButtonClick,
}: {
  handleDarkButtonClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      onClick={handleDarkButtonClick}
      className="py-7 px-3 transition-transform duration-300 transform hover:-translate-y-0.5">
      <FontAwesomeIcon icon={faMoon} />
    </button>
  )
}

export default DarkModeButton
