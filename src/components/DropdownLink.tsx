import { Link } from 'react-router-dom'

function DropdownLink({ link, label }: { link: string; label: string }) {
  return (
    <Link
      to={link}
      className="px-3 py-7 transition-transform duration-300 transform hover:-translate-y-0.5">
      {label}
    </Link>
  )
}

export default DropdownLink
