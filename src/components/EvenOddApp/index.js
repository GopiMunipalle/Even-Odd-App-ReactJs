// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const EvenOdd = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p>{EvenOdd}</p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
