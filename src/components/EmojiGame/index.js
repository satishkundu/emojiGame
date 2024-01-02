import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {topScore: 0, clickedEmojiList: [], isGameInProgress: true}

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon =clickedEmojiList.length===emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        playAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state

    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  emojiClick = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiClicked = clickedEmojiList.includes(id)
    const clickedEmojisListLength = clickedEmojiList.length

    if (isEmojiClicked) {
      this.finishGameAndSetTopScore(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clikedEmojiList: [...previousState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul>
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            shuffledEmojisList={eachEmoji}
            emojiClick={this.emojiClick}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, clickedEmojiList, isGameInProgress} = this.state

    return (
      <div className="emojiGameContainer">
        <NavBar
          currentScore={clickedEmojiList.length}
          targetScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emojiCardContainer">
        {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
