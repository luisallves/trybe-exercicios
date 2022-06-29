import React from "react";
import pokemons from "../data/data";
import Pokemon from "./Pokemon"

class Pokedex extends React.Component {
  render() {
    return(
      <>
        <h1 className="title">Pokedex</h1>
        <div className="pokedex">
        {
          pokemons.map((pokemon)=>{
            return(
              <Pokemon pokemon={pokemon}/>
            )
          })
        }
        </div>
      </>
    )
  }
}

export default Pokedex;
