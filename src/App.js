import './App.css';
import { useState, useEffect } from "react"
import Axios from "axios"
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [singlePoke, setSinglePoke] = useState({
    name: "Charmander",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    hp: 39,
    attack: 52,
    defense: 43,
    specialAttack: 60,
    specialDefense: 50,
    speed: 65
  })
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [loading, setLoading] = useState(true)
  const [nextPage, setNextPage] = useState()
  const [previousPage, setPreviousPage] = useState()

  useEffect(() => {
    setLoading(true)
    Axios.get(URL)
      .then((response) => {
        setNextPage(response.data.next)
        setPreviousPage(response.data.previous)
        getPokemon(response.data.results)
        setLoading(false)
      }).catch(error => {
        alert(error)
      })
  }, [URL])

  function getPokemon(res) {
    const urls = res.map(res => res.url)
    //console.log(urls,"sivusto hommat")
    const requests = urls.map((url) => Axios.get(url))
    Axios.all(requests).then((responses) => {
      setPokemon(responses)
    })
  }
 

  function goToNextPage() {
    setURL(nextPage)
  }
  function goToPreviousPage() {
    setURL(previousPage)
  }

  function pokemonName(e) {
    //console.log(e.currentTarget.id,"sinkkupokelle tiedot")
    pokemon.map(poke => {
      if (poke.data.id == e.currentTarget.id) {
        setSinglePoke({
          name: poke.data.name,
          img: poke.data.sprites.front_default,
          hp: poke.data.stats[0].base_stat,
          attack: poke.data.stats[1].base_stat,
          defense: poke.data.stats[2].base_stat,
          specialAttack: poke.data.stats[3].base_stat,
          specialDefense: poke.data.stats[4].base_stat,
          speed: poke.data.stats[5].base_stat
        })
      }
    })
  }

  console.log(pokemon, "kaikki")
  console.log(singlePoke)

  return (
    <div className="App">
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <PokemonList
          pokemon={pokemon}
          pokemonName={pokemonName}
          loading={loading}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          previousPage={previousPage}
          nextPage={nextPage} />


        <Pokemon singlePokemon={singlePoke} loading={loading} />

      </main>
      <footer>
        <span>Tomi Valtanen</span>
      </footer>


    </div>
  );

}

export default App;
