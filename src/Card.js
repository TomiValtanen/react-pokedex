import React from "react"
import { v4 as uuidv4 } from 'uuid'


function Card (props) {
const style={
    display:"grid",
    gridTemplateColumns:"auto auto auto auto",
    cursor: "pointer",
    gap:20,
    fontSize:15,
    textAlign:"left",
    marginBottom:20


}

    return(
      <div  style={style}>
        {props.pokeData?.map(p=>(
        <div id={p.data.id} onClick={props.handleClick} key={uuidv4()}> 
        <img src={p.data.sprites.front_default}></img> 
            <h2>#{p.data.id}</h2>
            <h2>{p.data.name}</h2>
            </div>))}
      </div>
    )
} 
export default Card