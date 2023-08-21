import './App.css';
import { useState, useEffect } from "react"
import Axios from "axios"
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [singlePoke, setSinglePoke] = useState({
    name: "Charmander",
    types: [{
      type: {
        name: "fire"
      }
    }],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    stats: [{
      base_stat: 39,
      stat: {
        name: "hp"
      }
    },
    {
      base_stat: 52,
      stat: {
        name: "attack"
      }
    },
    {
      base_stat: 43,
      stat: {
        name: "defense"
      }
    },
    {
      base_stat: 60,
      stat: {
        name: "special Attack"
      }
    },
    {
      base_stat: 50,
      stat: {
        name: "special Defense"
      }
    },
    {
      base_stat: 65,
      stat: {
        name: "speed"
      }
    },

    ]
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
          types: poke.data.types.map(type => type),
          img: poke.data.sprites.front_default,
          stats:poke.data.stats.map(stat=>stat)
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
