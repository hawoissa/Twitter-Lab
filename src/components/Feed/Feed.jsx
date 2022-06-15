import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import UserProfile from "../UserProfile/UserProfile"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox {...props}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed" >
        {props.tweets.map((tweet, idx)=> 
        <Tweet tweet={tweet} key={idx} 
        data-tweet-id = {tweet.id} className="tweet" 
        name={tweet.name} handle={tweet.handle}
        numComments={tweet.numComments} numRetweets={tweet.numRetweets} 
        numLikes={tweet.numLikes}/>
        )}</div>
    </div>
  )
}
