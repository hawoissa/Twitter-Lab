import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

export default function TweetInput(props) {
  const handleFocus = (event) => {
    event.target.classList.add("expanded");
  }
  const handleBlur = (event) => {
    event.target.classList.remove("expanded");
  }
  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea name="new-tweet-input" type="text" placeholder="What's Happening?"
      value={props.value} onChange={props.handleOnChange}
      onBlur={handleBlur} onFocus={handleFocus}></textarea>

      <SmileIcon />
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
