import React from "react";
import Start from "./Start.jsx";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'one': '',
      'two': '',
      'three': '',
      'four': '',
      'five': ''
    };
    this.handleInputWords = this.handleInputWords.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputWords(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
        [name]: event.target.value
    });
  }
  submit() {
    console.log('submit called!');
    axios.get('/wtt', {
      params: {
        one: this.state.one,
        two: this.state.two,
        three: this.state.three,
        four: this.state.four,
        five: this.state.five
      }
    })
    .then((data) => {
      console.log('data back from the server, in App.jsx', data);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    return (
      <div>
        <h1>Zacholingo</h1>
        <div>
          <Start
            handleInputWords={this.handleInputWords}
            submit={this.submit}
          />
        </div>
      </div>
    );
  }
}

export default App;
