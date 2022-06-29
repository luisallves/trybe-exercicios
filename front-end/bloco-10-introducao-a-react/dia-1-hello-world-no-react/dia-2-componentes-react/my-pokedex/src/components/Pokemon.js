import React from "react";
// import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render(){
    const {name,type, averageWeight, image} = this.props.pokemon
    return(

      <div className="pokemon-card">
        <img src={image} alt={name} />
        <div className="pokemon-info">
          <h2>{name}</h2>
          <p>{type}</p>
          <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
      </div>
    )
  }
}

export default Pokemon;
