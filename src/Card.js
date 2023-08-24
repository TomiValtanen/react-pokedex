import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"


function Card(props) {

  const cardContainer = {
    padding:"20px",
    display: "flex",
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    cursor: "pointer",
    gap: 20,
    width:"800px"


  }

  const cardStyle = {
    height:'100px',
    width:"350px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 15,
    backgroundColor:"#FEEBA0",
    boxShadow:' 10px 10px 10px -2px rgba(0,0,0,0.75)',
    
  }

  function upperCase(word){
    const firstLetter =word.charAt(0)
    const remainingLetters=word.slice(1)
    const firstLetterCap=firstLetter.toUpperCase()
    return firstLetterCap + remainingLetters

}
  return (
    <div style={cardContainer}>
      {props.pokeData?.map(p => (
        <div style={cardStyle} id={p.data.id} onClick={props.handleClick} key={uuidv4()}>
          <h2>#{p.data.id}</h2>
          <img style={{ width: 150 }} src={p.data.sprites.front_default} alt={p.data.name}></img>

          <h2>{upperCase(p.data.name)}</h2>
        </div>))}
    </div>
  )
}
export default Card