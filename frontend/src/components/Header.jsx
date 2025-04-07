import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-purple-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Gruppe 27</h1>
      <nav className="flex gap-4">
        <Link to="/">Hjem</Link>
        <Link to="/profil/aa48dd41-36ed-48d8-9afb-252750946e78">Trym</Link>
        <Link to="/profil/66fdf61e-e8e4-4ab0-987d-9930af2ecaf0">Yamen</Link>
      </nav>
    </header>
  )
}
