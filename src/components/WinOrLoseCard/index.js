// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, playAgain} = props

  const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const imageUrl = isWon ? winImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const gameScore = isWon ? 'Best Score' : 'Score'

  return (
    <div className="cardContainer">
      <p className="para">{gameStatus}</p>
      <h1 className="head">{gameScore}</h1>
      <p className="para">{score}/12</p>
      <button type="button" onClick={playAgain}>
        Play Again
      </button>
      <div className="imageCard">
        <img src={imageUrl} alt="emojiimage" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
