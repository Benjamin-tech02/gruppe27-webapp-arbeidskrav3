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
      <h2>Gruppemedlemmer</h2>
      <div>
        {medlemmer.map(m => (
          <ProfileCard key={m._id} medlem={m} />
        ))}
      </div>

      <h2>Arbeidslogg</h2>
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Navn</th>
            <th>Beskrivelse</th>
            <th>Tid brukt</th>
          </tr>
        </thead>
        <tbody>
          {arbeidslogg.map((logg, i) => (
            <tr key={i}>
              <td>{logg.dato}</td>
              <td>{logg.navn}</td>
              <td>{logg.beskrivelse}</td>
              <td>{logg.timer} timer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
