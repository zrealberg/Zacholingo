import React from "react";
import Start from "./Start.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWords : []
    };
  }
  render() {
    return (
      <div>
        <h1>Zacholingo</h1>
        <div>
          <Start />
        </div>
      </div>
    );
  }
}

export default App;
