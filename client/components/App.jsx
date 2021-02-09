import React from "react";
import Start from "./Start.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    };
    this.handleInputWords = this.handleInputWords.bind(this);
  }

  handleInputWords(event) {
    console.log('function is called', event.target.value);
    const target = event.target;
    const name = target.name;
    this.setState({
        [name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Zacholingo</h1>
        <div>
          <Start handleInputWords={this.handleInputWords}/>
        </div>
      </div>
    );
  }
}

export default App;
