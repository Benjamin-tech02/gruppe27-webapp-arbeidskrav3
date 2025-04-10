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
      <section>
        <img src={medlem.bilde} alt={medlem.navn} />
        <article>
          <h2>{medlem.navn}</h2>
          <p>{medlem.bio}</p>
          <h3>Interesser</h3>
          <ul>
            {medlem.interesser.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </article>
      </section>

      <h3 id="profil-overskrift">Arbeidslogg</h3>
      <div className="arbeidslogg-wrapper">
        <table className="arbeidslogg-tabell">
          <tbody>
            {medlem.arbeidslogg?.map((logg, idx) => (
              <tr key={idx}>
                <td>{logg.dato}</td>
                <td>{logg.beskrivelse}</td>
                <td>{logg.timer} timer</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
