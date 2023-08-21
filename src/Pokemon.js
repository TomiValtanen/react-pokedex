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

    function pokemonColors(type){
        const colours = {
            normal: '#A8A77A',
            fire: '#EE8130',
            water: '#6390F0',
            electric: '#F7D02C',
            grass: '#7AC74C',
            ice: '#96D9D6',
            fighting: '#C22E28',
            poison: '#A33EA1',
            ground: '#E2BF65',
            flying: '#A98FF3',
            psychic: '#F95587',
            bug: '#A6B91A',
            rock: '#B6A136',
            ghost: '#735797',
            dragon: '#6F35FC',
            dark: '#705746',
            steel: '#B7B7CE',
            fairy: '#D685AD',
        };
        return colours[type]
    }
    return (
        <div style={style}>

            <img style={{width:300,  background:' rgb(212,30,0)',background:' radial-gradient(circle, rgba(212,30,0,1) 0%, rgba(254,235,160,1) 70%)'}} src={singlePokemon.img} alt={singlePokemon.name}></img>
            <h2 style={{marginBottom:"10px"}}>{upperCase(singlePokemon.name)}</h2>
            <div style={{gap:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",marginBottom:"10px"}}>
            {singlePokemon.types.map(type=><span style={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",borderRadius:"10px",border:"1px solid black",height:"40px",width:"90px",backgroundColor:pokemonColors(type.type.name)}} key={uuidv4()}>{upperCase(type.type.name)}</span>)}
            </div>
            
            {singlePokemon.stats.map(stat=><h3 key={uuidv4()}>{upperCase(stat.stat.name)} : {stat.base_stat}</h3>)}


        </div>
    )
}

export default Pokemon