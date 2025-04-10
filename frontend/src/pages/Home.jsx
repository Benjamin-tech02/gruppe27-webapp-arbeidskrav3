import { useEffect, useState } from 'react'
import sanityClient from '../sanityClient'
import ProfileCard from '../components/ProfileCard'

export default function Home() {
  const [medlemmer, setMedlemmer] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "medlem"]{
      _id,
      navn,
      epost,
      "bilde": bilde.asset->url,
      arbeidslogg
    }`).then(setMedlemmer)
  }, [])

  let arbeidslogg = []

  medlemmer.forEach(medlem => {
    if (medlem.arbeidslogg) {
      medlem.arbeidslogg.forEach(logg => {
        arbeidslogg.push({
          dato: logg.dato,
          beskrivelse: logg.beskrivelse,
          timer: logg.timer,
          navn: medlem.navn
        })
      })
    }
  })

  arbeidslogg.sort((a, b) => new Date(a.dato) - new Date(b.dato))

  return (
    <main>
      <h2 id="overskrivt-gruppe">Gruppemedlemmer</h2>
      <div className="profilkort">
        {medlemmer.map(m => (
          <ProfileCard key={m._id} medlem={m} />
        ))}
      </div>

      <h2 id="tabellnavn">Arbeidslogg</h2>
      <div className="arbeidslogg-wrapper">
        <table className="arbeidslogg-tabell">
          <tbody>
            {arbeidslogg.map((logg, i) => (
              <tr key={i}>
                <td>{logg.dato?.slice(0, 10)}</td>
                <td>{logg.navn}</td>
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