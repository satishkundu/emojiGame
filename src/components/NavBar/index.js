// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, targetScore, isGameInProgress} = props

  return (
    <nav className="navContainer">
      <div className="imgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scoreContainer">
          <p className="score">score:{currentScore}</p>
          <p className="targetScore">Top Score:{targetScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
