import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchValue:''

  }

  getPokemons = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          pokemon: data
        })
      })
  }

  componentDidMount() {
    this.getPokemons()
  }

  handleAddPokemon = (newPoke) => {


    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPoke)
    }




    fetch('http://localhost:3000/pokemon', configObject)

      .then(res => res.json())
      .then((data) => {
        this.setState({
          pokemon: [...this.state.pokemon, data]
        })


      })


  }
handleChange=(searchValue)=>{
  this.setState({
    searchValue:searchValue
  })
  


}

  render() {

    let pokemons=this.state.pokemon
    if(this.state.searchValue !== ''){
      pokemons=this.state.pokemon.filter((value) => value.name.indexOf(this.state.searchValue) !== -1)
    }

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.handleAddPokemon} />
        <br />
        <Search onSearch={this.handleChange}/>
        <br />
        <PokemonCollection  pokemon={pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
