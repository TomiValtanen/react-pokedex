import React from "react"
import { v4 as uuidv4 } from 'uuid'


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
            {singlePokemon.types.map(type=><h2 key={uuidv4()}>{upperCase(type.type.name)}</h2>)}
            {singlePokemon.stats.map(stat=><h3 key={uuidv4()}>{stat.stat.name} : {stat.base_stat}</h3>)}


        </div>
    )
}

export default Pokemon