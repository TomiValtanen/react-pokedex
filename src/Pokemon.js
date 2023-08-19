import React from "react"


function Pokemon({ singlePokemon, loading }) {
    const style = {
        position:"sticky",
        top:50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: 400,
        padding: 20,
        height: 650,
        marginTop:30,
        backgroundColor:"#FEEBA0",
        borderRadius:20,
        boxShadow:' 10px 10px 10px -2px rgba(0,0,0,0.75)'

    }
    function upperCase(word){
        const firstLetter =word.charAt(0)
        const remainingLetters=word.slice(1)
        const firstLetterCap=firstLetter.toUpperCase()
        return firstLetterCap + remainingLetters

    }


    return (
        <div style={style}>

            <img style={{width:300,  background:' rgb(212,30,0)',background:' radial-gradient(circle, rgba(212,30,0,1) 0%, rgba(254,235,160,1) 70%)'}} src={singlePokemon.img} alt={singlePokemon.name}></img>
            <h2>{upperCase(singlePokemon.name)}</h2>
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