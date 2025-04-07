import { Link } from 'react-router-dom'

export default function ProfileCard({ medlem }) {
  return (
    <Link to={`/profil/${medlem._id}`}>
      <div className="border p-4 rounded hover:shadow transition">
        <img src={medlem.bilde} alt={medlem.navn} className="w-32 h-32 object-cover rounded mx-auto" />
        <h3 className="text-center mt-2">{medlem.navn}</h3>
        <p className="text-center text-sm text-purple-600">{medlem.epost}</p>
      </div>
    </Link>
  )
}
