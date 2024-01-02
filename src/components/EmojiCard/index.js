// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {shuffledEmojisList, emojiClick} = props
  const {emojiName, emojiUrl, id} = shuffledEmojisList

  const clickEmoji = () => {
    emojiClick(id)
  }

  return (
    <li className="listItems">
      <button type="button" className="emojiContainer" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="imgProp" />
      </button>
    </li>
  )
}
export default EmojiCard
