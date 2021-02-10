import React from "react";
import RoundOne from './RoundOne';
// import RoundTwo from './RoundTwo';
// import RoundThree from './RoundThree';

class Gameplay extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      score: 0,
      showRoundOne: true,
      showRoundTwo: false,
      showRoundThree: false
    }
  }

  render() {
    return (
      <div>
        <div>Your Score: {this.state.score}</div>
        {this.state.showRoundOne &&
        <RoundOne
          engWords={this.props.engWords}
          spaWords={this.props.spaWords}
        />
        }
      </div>
    );
  }
}

export default Gameplay;