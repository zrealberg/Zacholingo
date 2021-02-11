import React from "react";
import RoundOne from './RoundOne';
import RoundTwo from './RoundTwo';
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
    this.startRoundTwo = this.startRoundTwo.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.endGame = this.endGame.bind(this);
  }
  updateScore(value){
    const newScore = this.state.score + value;
    this.setState({
      score: newScore
    })
  }

  startRoundTwo(score){
    console.log('startR2 called');
    this.setState({
      showRoundOne: false,
      showRoundTwo: true,
    })
  }
  endGame(){
    console.log('game over');
  }

  render() {
    return (
      <div>
        <div>Your Score: {this.state.score}</div>
        {this.state.showRoundOne &&
        <RoundOne
          engWords={this.props.engWords}
          spaWords={this.props.spaWords}
          startRoundTwo={this.startRoundTwo}
          updateScore={this.updateScore}
        />
        }
        {this.state.showRoundTwo &&
        <RoundTwo
          engWords={this.props.engWords}
          spaWords={this.props.spaWords}
          endGame={this.endGame}
          updateScore={this.updateScore}
        />
        }
      </div>
    );
  }
}

export default Gameplay;