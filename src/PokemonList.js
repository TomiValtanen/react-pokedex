import React from "react"
import Card from "./Card"


function PokemonList(props) {
    const style={
        width:550,
        padding:20,
        marginBottom:20
        
        
    }

    const buttonDiv={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      gap:10,
      alignItems:"center",
      marginTop:20
        
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