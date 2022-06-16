import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value);
  }
  function handleOnSubmit() {
    let newTweet = [...props.tweets, { name: props.userProfile.name,
      handle: props.userProfile.handle, text: props.tweetText,
      comments: 0, likes: 0, retweets: 0,
      id: props.tweets.length
    }]  
    props.setTweets(newTweet);
    props.setTweetText("");
    props.userProfile.numTweets += 1;
  }
  //console.log("this is tweetext   " + props.tweetText);
  const length = props.tweetText.length;
  const shouldDisable = length > 140 || length == 0;
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} props={props} handleOnChange={handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} shouldDisable={shouldDisable}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount({tweetText}) {
  let count = tweetText.length > 140 ? "red" : "";
  let wCount = 140 - tweetText.length;
  if (tweetText.length == 0) return null;
  return <span class={count} >{wCount}</span>;
}

export function TweetSubmitButton({ handleOnSubmit, shouldDisable}) {

  return (
    <div className="tweet-submit" >
      <i className="fas fa-plus-circle"></i>
      <button disabled={shouldDisable} type="submit" className="tweet-submit-button" onClick={handleOnSubmit}
      >Tweet</button>
    </div>
  )

}
