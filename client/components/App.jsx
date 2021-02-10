import React from "react";
import Start from "./Start.jsx";
import axios from "axios";
import Study from './Study';
import Gameplay from './Gameplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      showStart: true,
      showStudy: false,
      showGameplay: false,
      english: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: ""
      }
    };
    this.handleInputWords = this.handleInputWords.bind(this);
    this.submit = this.submit.bind(this);
    this.beginGameplay = this.beginGameplay.bind(this);
  }

  handleInputWords(event) {
    const target = event.target;
    const name = target.name;
    var english = this.state.english;
    english[name] = event.target.value
    this.setState({
      english
    });

    event.preventDefault();
  }

  submit() {
    console.log("submit called!");
    axios
      .get("/wtt", {
        params: this.state.english
      })
      .then((data) => {
        this.setState({
          spanish: data.data,
          showStart: false,
          showStudy: true
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  beginGameplay() {
    console.log('ive been called');
    this.setState({
      showStudy: false,
      showGameplay: true
    })
  }

  render() {
    return (
      <div>
        <h1>Zacholingo</h1>
        <div>
          {this.state.showStart && (
            <Start
              handleInputWords={this.handleInputWords}
              submit={this.submit}
            />
          )}
          {this.state.showStudy && (
            <Study
              engWords={this.state.english}
              spaWords={this.state.spanish}
              beginGameplay={this.beginGameplay}
            />
          )}
          {this.state.showGameplay && (
            <Gameplay
              engWords={this.state.english}
              spaWords={this.state.spanish}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
