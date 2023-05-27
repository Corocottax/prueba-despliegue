import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pokemons">Pokemons</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header