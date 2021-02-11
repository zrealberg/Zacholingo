import React from "react";

class Question extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedAnswer: ''
    }
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  selectAnswer(e) {
    console.log('e.target.classname', e.target.className);
    this.setState({
      selectedAnswer: e.target.className
    })
  }


  render() {
    const randomIndex = Math.floor(Math.random() * Math.floor(3));
    // console.log('Questions.jsx - random index (s/b b/t 0-2)', randomIndex);
    const allAnswers = this.props.alts.slice(0);
    allAnswers.splice(randomIndex, 0, this.props.sword);
    // console.log('jumbled answers arr', allAnswers);

    const answerSet = allAnswers.map((ans) => {
      return (
        <div>
          <button
            onClick={this.selectAnswer}
            onClick={this.props.grabAnswers}
            className={ans}>
            {ans}
          </button>
          <br></br>
        </div>
      )
    })

    return (
      <div>
        <h4>
          Select the correct translation for {this.props.eword}
        </h4>
        <div>
        {answerSet}
        </div>
        <br></br>
        <div>
          You have select {this.state.selectedAnswer}
        </div>
        <br></br>
        <button>Submit</button>
      </div>
    )
    }
}

export default Question;