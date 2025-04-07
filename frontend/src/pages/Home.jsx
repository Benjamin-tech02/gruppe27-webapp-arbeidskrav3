import { useEffect, useState } from 'react'
import sanityClient from '../sanityClient'
import ProfileCard from '../components/ProfileCard'

export default function Home() {
  const [medlemmer, setMedlemmer] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "medlem"]{
      _id, navn, epost, "bilde": bilde.asset->url
    }`).then(data => setMedlemmer(data))
  }, [])

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gruppemedlemmer</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {medlemmer.map(medlem => (
          <ProfileCard key={medlem._id} medlem={medlem} />
        ))}
      </div>
    </main>
  )
}
