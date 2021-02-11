import React from "react";
import RoundOne from './RoundOne';
import RoundTwo from './RoundTwo';
import EndScreen from './EndScreen';

class Gameplay extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      score: 0,
      showRoundOne: true,
      showRoundTwo: false,
      showEndScreen: false
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
    this.setState({
      showRoundTwo: false,
      showEndScreen: true
    })
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
        {this.state.showEndScreen &&
        <EndScreen
          score={this.state.score}
        />
        }
      </div>
    );
  }
}

export default Gameplay;