import React, { Component } from 'react'

export class FunctionClick extends Component {
  render() {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
      <div>
        <button onClick={clickHandler}>Click</button>
      </div>
    )
  }
}

export default FunctionClick
