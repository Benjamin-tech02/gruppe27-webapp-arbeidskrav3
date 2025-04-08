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
    <main>
      <div>
        <img src={medlem.bilde} alt={medlem.navn} />
        <div>
          <h2>{medlem.navn}</h2>
          <p>{medlem.bio}</p>
          <h3>Interesser</h3>
          <ul>
            {medlem.interesser.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </div>
      </div>

      <h3>Arbeidslogg</h3>
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Beskrivelse</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {medlem.arbeidslogg?.map((logg, idx) => (
            <tr key={idx}>
              <td>{logg.dato}</td>
              <td>{logg.beskrivelse}</td>
              <td>{logg.timer} t</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
