import React, { Component } from "react";
import "./css/App.css";
import uid from "uid";

const data = {
  experience: ["J2 Global", "USC Interaction Lab"],
  projects: ["BarCrawler", "terminal", "Web Crawler"],
  Skill: ["C", "C++", "JavaScript", "React"]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.captureText = this.captureText.bind(this);
    this.state = {
      textLine: [{ text: "", blink: true }],
      count: 0,
      text: "$ ",
      upper: false
    };
  }

  componentDidMount() {
    window.location.hash = "#maintab";
    var textLine = this.state.textLine;
    textLine[0].text = this.state.text;
    textLine[0].blink = true;
    this.setState({
      textLine: textLine
    });
  }

  captureText(e) {
    if (e.key === "Backspace") {
      var str = this.state.text;
      var returnVal = "";
      for (var i = 0; i < str.length - 1; i++) {
        returnVal += str[i];
      }
      var textLine = this.state.textLine;
      textLine[this.state.count].text = returnVal;
      this.setState({
        text: returnVal,
        textLine: textLine
      });
    } else if (e.key === "Shift") {
      this.setState({
        upper: true
      });
    } else if (e.key === "Control") {
    } else if (e.key === "Alt") {
    } else if (e.key === "Enter") {
      var count = this.state.count + 1;
      var textLine3 = this.state.textLine;
      var add = { text: "$ ", blink: true };
      textLine3.push(add);
      textLine3[count - 1].blink = false;
      this.setState({
        textLine: textLine3,
        text: "$ ",
        count: this.state.count + 1
      });
    } else {
      var text = this.state.text + e.key;
      var textLine2 = this.state.textLine;
      textLine2[this.state.count].text = text;
      this.setState({
        text: text,
        textLine: textLine2
      });
    }
  }

  render() {
    console.log(this.state.text);
    console.log(this.state.textLine);

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
              {this.state.textLine.map(el => {
                return (
                  <div>
                    <p key={uid()}>{el.text}</p>
                    {el.blink && <span className="blinking-cursor">|</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
