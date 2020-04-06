import React from "react";
import "./styles.css";

const TweetShare = ({ hashtag, text }) => {
    
  if (!hashtag || !text) return null;

  return (
    <a id="tweet-quote" href={getTweetUrl(hashtag, text)}>
      <i className="fab fa-twitter"></i>
    </a>
  );
};

const getTweetUrl = (hashtag, text) =>
  `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashtag)}&text=${encodeURIComponent(text)}`;

export default TweetShare;
