import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import CommentBox from "./components/comment-box";
//temp imports
import Emmett from "./assets/emmet_brown.jpg";
import Rick from "./assets/rick_sanchez.jpg";

class App extends Component {
  render() {
    const comments = [
      {
        author: "Emmett Brown",
        image: Emmett,
        date: "December 28th, 2017 @ 3:12am",
        text: "I invented time travel and I did it in style!"
      },
      {
        author: "Rick Sanchez",
        image: Rick,
        date: "December 28th, 2017 @ 3:16am",
        text: "Two words...portal gun...douchbag!"
      }
    ];
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <CommentBox comments={comments} />
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
