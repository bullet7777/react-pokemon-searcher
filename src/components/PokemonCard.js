import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    imageBackground:this.props.poke.sprites.front
  }


  



  handleClick=()=>{
    
    if(this.state.imageBackground===this.props.poke.sprites.front){
      this.setState({
        imageBackground:this.props.poke.sprites.back
      })
    }else{
      this.setState({
        imageBackground:this.props.poke.sprites.front
      })
    }
   
  }






  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img  alt="oh no!" src={this.state.imageBackground}/>
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
