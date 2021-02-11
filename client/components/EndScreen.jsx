import React from "react";

class EndScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>
          Wow! You scored {this.props.score}! Great Job!
        </h1>
      </div>
    )
  }
}

export default EndScreen;