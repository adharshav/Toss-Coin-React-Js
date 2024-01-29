import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, lastToss: 'heads'}

  headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

  tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

  onCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      total: prevState.total + 1,
      heads: tossResult === 0 ? prevState.heads + 1 : prevState.heads,
      tails: tossResult !== 0 ? prevState.tails + 1 : prevState.tails,
      lastToss: tossResult === 0 ? 'heads' : 'tails',
    }))
  }

  render() {
    const {total, heads, tails, lastToss} = this.state
    const currentImage =
      lastToss === 'heads' ? this.headsImageUrl : this.tailsImageUrl
    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={currentImage} alt="toss result" className="coin-image" />
          <button type="button" className="toss-btn" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="results-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
