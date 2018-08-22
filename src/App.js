import React, { Component } from "react";
import "./css/App.css";
import uid from "uid";
import Level from "./Level";
import DisplayError from "./DisplayError";

const myData = {
  Experience: ["J2 Global", "USC Interaction Lab"],
  Projects: ["BarCrawler", "terminal", "Web Crawler"],
  Skill: ["C", "C++", "JavaScript", "React"],
  About: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.captureText = this.captureText.bind(this);
    this.checkHeight = this.checkHeight.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.state = {
      textLine: [{ text: "", blink: true, display: false }],
      count: 0,
      level: 0,
      text: "$ ",
      upper: false,
      cd: ""
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
      if (str !== "$ " && str.length !== 2) {
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
      }
    } else if (e.key === "Shift") {
      this.setState({
        upper: true
      });
    } else if (e.key === "Control" || e.key === "Alt" || e.key === "Tab") {
    } else if (e.key === "Enter") {
      this.checkHeight();
      var display = this.handleEnter(
        this.state.textLine[this.state.count].text
      );
      var count = this.state.count + 1;
      var textLine3 = this.state.textLine;
      var add =
        display.text === ""
          ? {
              text: "$ ",
              blink: true,
              display: display.display,
              err: display.error,
              level: display.level
            }
          : {
              text: display.text + "$ ",
              blink: true,
              display: display.display,
              err: display.error,
              level: display.level
            };
      textLine3.push(add);
      textLine3[count - 1].blink = false;
      this.setState({
        textLine: textLine3,
        text: add.text,
        count: this.state.count + 1,
        level: display.text !== "" ? display.level : this.state.level
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

  handleEnter(data) {
    var text = data.split(" ");
    if (text[1] === "ls") {
      return {
        display: true,
        text: this.state.cd === "" ? "" : this.state.cd,
        error: false,
        level: this.state.level
      };
    } else if (text.length > 2 && text[1] === "cd") {
      if (text[2] in myData) {
        this.setState({
          cd: text[2]
        });
        return {
          display: false,
          text: text[2],
          error: false,
          level: this.state.level + 1
        };
      } else {
        return {
          display: false,
          text: "",
          error: true,
          level: this.state.level
        };
      }
    }
    return { display: false, text: "", error: false, level: this.state.level };
  }

  checkHeight() {
    const height = document.getElementById("container").clientHeight;
    if (height > 342) {
      document.getElementById("scroll").scrollTo(0, 1000);
    }
  }

  render() {
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
            <div className="displayText" id="scroll">
              <div id="container">
                {this.state.textLine.map(el => {
                  return (
                    <div key={uid()}>
                      {el.err && <DisplayError />}
                      {el.display && (
                        <Level
                          level={el.level}
                          data={myData}
                          text={this.state.cd}
                        />
                      )}
                      <p>{el.text}</p>
                      {el.blink && <span className="blinking-cursor">|</span>}
                    </div>
                  );
                })}
                <div id="dummy">a</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
