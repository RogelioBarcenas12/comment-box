import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import CommentBox from "./components/comment-box";
//temp imports
import Emmett from "./assets/emmet_brown.jpg";
import Rick from "./assets/rick_sanchez.jpg";
import Doctor from "./assets/tardis-doctor-who.png";

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
      },
      {
        author: "Doctor Who",
        image: Doctor,
        date: "December 28th, 2017 @ 3:20am",
        text: "My TARDIS is dimensionally transcendental."
      },
      {
        author: "Rick Sanchez",
        image: Rick,
        date: "December 28th, 2017 @ 3:22am",
        text: "F#$% you, mother F#$%#%! I'll be seeing you soon!"
      }
    ];
    return (
      <div className="App">
        <div>
          <Navbar number={comments.length} />
        </div>
        <div>
          <CommentBox comments={comments} />
        </div>
      </div>
    );
  }
}

export default App;
