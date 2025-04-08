import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Gruppe 27</h1>
      <nav>
        <Link to="/">Hjem</Link> 
        <Link to="/profil/aa48dd41-36ed-48d8-9afb-252750946e78">Trym</Link> 
        <Link to="/profil/66fdf61e-e8e4-4ab0-987d-9930af2ecaf0">Yamen</Link>
      </nav>
    </header>
  )
}
