import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Pokemons from './pages/Pokemons/Pokemons'
import PokemonDetail from './pages/PokemonDetail/PokemonDetail'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pokemons" element={<Pokemons/>}/>
        <Route path="/pokemonDetail/:id" element={<PokemonDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App