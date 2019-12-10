import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import axios from "axios";
import logo from "../../src/twitter-logo.png";
import "./home.css";

export default function Home() {
  const [tweet, setTweet] = useState("");

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/tweets",
      data: {
        twt: tweet
      }
    })
      .then(console.log(tweet))
      .catch(err => console.log(err));
  };

  return (
    <div className={"content"}>
      <h2>Post to Twitter</h2>
      <div className="logo">
        <img alt="twitter-logo" src={logo} width="225" height="200" />
      </div>
      <form>
        <br />
        <Input
          type="text"
          name="tweet"
          color="primary"
          value={tweet}
          onChange={e => setTweet(e.target.value)}
          placeholder="Your Tweet..."
        ></Input>
        <Button
          className="button"
          variant="contained"
          color="default"
          onClick={handleSubmit}
        >
          Post
        </Button>
      </form>
    </div>
  );
}
