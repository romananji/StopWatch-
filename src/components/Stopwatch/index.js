// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {seconds: 0}
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(obj => ({seconds: obj.seconds + 1}))
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({seconds: 0})
  }

  render() {
    const {seconds} = this.state
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    const a = min > 9 ? min : `0${min}`
    const b = sec > 9 ? sec : `0${sec}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="stopwatch-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <p className="timee">Time</p>
          </div>
          <h1 className="heading">
            {a}:{b}
          </h1>
          <div className="buttons-container">
            <button
              className="button button1"
              onClick={this.onStart}
              type="button"
            >
              Start
            </button>
            <button
              className="button button2"
              onClick={this.onStop}
              type="button"
            >
              Stop
            </button>
            <button
              className="button button3"
              onClick={this.onReset}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
