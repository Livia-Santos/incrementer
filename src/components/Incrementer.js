import React from 'react'

export default class Incrementer extends React.Component {
  state ={
    number: 0
  }

  handleDecremente = () => {
    // this.state.number -= 1
    // this.forceUpdate() // Get it to render again

    this.setState ((prevState) => ({
      number: prevState.number - 1
    }))
  }

  handleIncremente = () => {
    this.setState ((prevState) => ({
      number: prevState.number + 1
    }))
  }

  render(){
    const { number } = this.state


    return(
      <div style={{fontSize: "4rem"}}>
        <button onClick={this.handleDecremente}>-</button>
        {number}
        <button onClick={this.handleIncremente}>+</button>
      </div>
    )
  }

}
