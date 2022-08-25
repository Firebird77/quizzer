import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
  }

 
  // setInterval
  // clearInterval
  componentDidMount () {
    const startCount = '100'
    this.setState({
      count: startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }

 start=()=> {
    const startCount = '100'
    this.setState({
      count: startCount
    })
 }

  clear =()=> {
    clearInterval(this.myInterval)
  }




  render () {
    const {count} = this.state
    return (
      <div>
        <h1>Current Count: {count}</h1>
        <button onClick={this.clear}>clear</button>
        <button onClick={this.start}>clear</button>

      </div>
    )
  }
}

export default Timer