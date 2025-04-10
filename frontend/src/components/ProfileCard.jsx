import { Link } from 'react-router-dom'

export default function ProfileCard({ medlem }) {
  return (
    <Link to={`/profil/${medlem._id}`}>
      <div id="profil-kort1">
        <img src={medlem.bilde} alt={medlem.navn} />
        <h3>{medlem.navn}</h3>
        <p>{medlem.epost}</p>
      </div>
    </Link>
  )
}
