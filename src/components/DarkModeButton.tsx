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
      className="w-32 px-3 py-7 transition-transform duration-300 transform hover:-translate-y-0.5">
      <FontAwesomeIcon icon={faMoon} />
    </button>
  )
}

export default DarkModeButton
