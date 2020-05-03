import React, { Component } from 'react'
import Board from './Board'

export default class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            xisnext:true,
            stepNumber:0,
            history:[
                {squares:Array(9).fill(null)},
            ]
            }
    }


handleclick=(i)=>{
    const history=this.state.history
    const current=history[history.length - 1]
    const squares=current.squares

    const winner = calculateWinner(squares)

    if(winner || squares[i]) {
        console.log('won ');
        
      return
    }

    squares[i]=this.state.xisnext?'X':'O'
     this.setState({
        history:history.concat({
            squares:squares
        }),
        xisnext:!this.state.xisnext,
        stepNumber:history.length
        
    })
}

    render(){



        const history=this.state.history
        const current=history[this.state.stepNumber]
        

        let status
        const winner = calculateWinner(current.squares)
    
        if(winner) {
          status = 'Winner is' + winner
        } else {
          status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O')
        }

        
    return(
        <div className="game">
        <div className='game-board'>
        <Board clickact ={(i)=>this.handleclick(i)} squares={current.squares}/>

        <div className = "game-info">
        <div>{status}</div>
      </div>
    </div>

</div>
    )
}
}

function calculateWinner (squares) {
    const possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  
    for(let i = 0; i < possibilities.length; i++) {
      const [a, b, c] = possibilities[i]
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a]
      }
    }
  
    return null
  

}