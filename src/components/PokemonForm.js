import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state={
    pokeName:'',
    pokeHp:'',
    pokeFront:'',
    pokeBack:''

  }
  handleSubmit=event =>{
    event.preventDefault()
    let newPoke={
      "name":this.state.pokeName,
     "hp":this.state.pokeHp,
     sprites:{
      "front":this.state.pokeFront,
      "back":this.state.pokeBack
     }

    }
    this.props.addPokemon(newPoke)

  }
  handlePokeName=(event)=>{

    this.setState({
      pokeName:event.target.value
  })}

  handlePokeHp=(event)=>{
    this.setState({
      pokeHp:event.target.value
    })

  }
  handlePokeFront=(event)=>{
    this.setState({
      pokeFront:event.target.value

    })

  }
  handlePokeBack=(event)=>{
    this.setState({
      pokeBack:event.target.value
    })


  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={event=> this.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.pokeName} onChange={event => this.handlePokeName(event)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.pokeHp} onChange={event => this.handlePokeHp(event)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.pokeFront} onChange={event => this.handlePokeFront(event)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.pokeBack} onChange={event => this.handlePokeBack(event)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
