import React from "react"


function Pokemon({ singlePokemon, loading }) {
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        width: 300,
        padding: 20,
        height: 350

    }



    return (
        <div style={style}>

            <img src={singlePokemon.img} alt={singlePokemon.name}></img>
            <h2>{singlePokemon.name}</h2>
            <h3>hp : {singlePokemon.hp}</h3>
            <h3>attack : {singlePokemon.attack}</h3>
            <h3>defense : {singlePokemon.defense}</h3>
            <h3>special-attack : {singlePokemon.specialAttack}</h3>
            <h3>special-defense : {singlePokemon.specialDefense}</h3>
            <h3>speed : {singlePokemon.speed}</h3>


        </div>
    )
}

export default Pokemon