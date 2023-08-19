import React from "react"
import Card from "./Card"


function PokemonList(props) {
    const style={
        borderColor:"black",
        borderWidth:2,
        borderStyle:"solid",
        width:550,
        height:350,
        padding:20,
        
        
    }

    const buttonDiv={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      gap:10,
      alignItems:"center"
        
    }

    const buttonStyle={
        height:30,
        width:70,
    }

    return (
        <div style={style}>
            {props.loading ? <h1>Loading...</h1> : <Card pokeData={props.pokemon} handleClick={props.pokemonName} />}
            <div style={buttonDiv}>
            {props.previousPage && <button style={buttonStyle} onClick={props.goToPreviousPage}>Previous</button>}
            {props.nextPage && <button style={buttonStyle}  onClick={props.goToNextPage}>Next</button>}
            </div>
            
        </div>
    )
}

export default PokemonList