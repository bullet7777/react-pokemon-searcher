import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
     const allPokemons=this.props.pokemon.map((poke) =><PokemonCard  poke={poke}/>)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {allPokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection
