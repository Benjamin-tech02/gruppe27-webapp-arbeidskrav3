import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import sanityClient from '../sanityClient'

export default function Profile() {
  const { id } = useParams()
  const [medlem, setMedlem] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "medlem" && _id == "${id}"][0]{
      navn, epost, bio, interesser, "bilde": bilde.asset->url, arbeidslogg
    }`).then(setMedlem)
  }, [id])

  if (!medlem) return <div>Laster...</div>

  return (
    <main className="p-6">
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        <img src={medlem.bilde} alt={medlem.navn} className="w-48 h-48 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold">{medlem.navn}</h2>
          <p className="mt-2">{medlem.bio}</p>
          <h3 className="font-semibold mt-4">Interesser</h3>
          <ul className="list-disc list-inside">
            {medlem.interesser.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">Arbeidslogg</h3>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Dato</th>
            <th className="p-2 border">Beskrivelse</th>
            <th className="p-2 border">Timer</th>
          </tr>
        </thead>
        <tbody>
          {medlem.arbeidslogg?.map((logg, idx) => (
            <tr key={idx}>
              <td className="p-2 border">{logg.dato}</td>
              <td className="p-2 border">{logg.beskrivelse}</td>
              <td className="p-2 border">{logg.timer} t</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
