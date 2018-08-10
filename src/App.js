import React, { Component } from "react";
import "./css/App.css";

const data = {
  experience: ["J2 Global", "USC Interaction Lab"],
  projects: ["BarCrawler", "terminal", "Web Crawler"],
  Skill: ["C", "C++", "JavaScript", "React"]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.captureText = this.captureText.bind(this);
    this.state = {
      text: "$ ",
      upper: false
    };
  }

  componentDidMount() {
    window.location.hash = "#maintab";
  }

  captureText(e) {
    if (e.key === "Backspace") {
      var str = this.state.text;
      var returnVal = "";
      for (var i = 0; i < str.length - 1; i++) {
        returnVal += str[i];
      }
      this.setState({
        text: returnVal
      });
    } else if (e.key === "Shift") {
      this.setState({
        upper: true
      });
    } else if (e.key === "Control") {
    } else if (e.key === "Alt") {
    } else if (e.key === "Enter") {
      document.getElementById("ls").style.visibility = "visible";
    } else {
      this.setState({
        text: this.state.text + e.key
      });
    }
  }

  render() {
    console.log(this.state.text);
    return (
      <div className="App">
        <div className="box">
          <div className="navbar">
            <div
              className="circle"
              style={{ backgroundColor: "rgb(255, 59, 71)" }}
            />
            <div
              className="circle"
              style={{ backgroundColor: "rgb(255, 193, 0)" }}
            />
            <div
              className="circle"
              style={{ backgroundColor: "rgb(0, 215, 66)" }}
            />
          </div>
          <div
            onKeyDown={this.captureText}
            tabIndex="0"
            className="main"
            id="maintab"
          >
            <div className="displayText">
              {this.state.text}
              <span className="blinking-cursor">|</span>
            </div>
            <div className="ls" id="ls">
              <ul>
                <li>Projects</li>
                <li>Experience</li>
                <li>Skill</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
