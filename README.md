## Twitter Poster
Twitter Poster is a project that uses Twitter API, Node.js and ReactJS to post tweets to your twitter page. 

## Motivation
I wanted to practice the whole "coding" pipeline from backend to fronted and also to use some known API. NodeJs/Express.JS was new thing for me prior to this project so this project was mainly to learn the basics and implement it to real use.

## Demo
![twitterPoster](./gif/twitterPoster.gif)

## Tech/Framework
- [ReactJS](https://reactjs.org/)
- [Express.JS](https://expressjs.com/)
- [Twitter API](https://developer.twitter.com/)

## If you want to try!
Before you can start posting to your Twitter page you need to create developer account to Twitter. There's a great documentation how to use their API and how to apply for a developer account.

 - Create .env file to yourself where you can store keys and passwords from Twitter API.
 - We are using [Twit](https://github.com/ttezel/twit) to send our post to Twitter.

`var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});`



