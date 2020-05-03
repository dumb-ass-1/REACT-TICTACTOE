import React, { Component } from 'react'
import Square from './Square'


export default class Board extends Component  {

    rendersquare=(i)=>{
        return(
            <Square value={this.props.squares[i]} handleclick={()=>this.props.clickact(i)}/>
        )
    }

render(){



  return(  <div>

    <div className="board-row">
   {this.rendersquare(0)}
   {this.rendersquare(1)}
   {this.rendersquare(2)}
    </div>


    <div className="board-row">
    {this.rendersquare(3)}
    {this.rendersquare(4)}
    {this.rendersquare(5)}
    </div>

    <div className="board-row">
    {this.rendersquare(6)}
    {this.rendersquare(7)}
    {this.rendersquare(8)}
    </div>
    
    
    
    
    </div>)
}
}
