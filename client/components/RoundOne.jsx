import React from "react";
import axios from 'axios';
import Question from './Question';

class RoundOne extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      altWords: {
        1: ['ab', 'cd'],
        2: ['ab', 'cd'],
        3: ['ab', 'cd'],
        4: ['ab', 'cd'],
        5: ['ab', 'cd']
      },
      selectedAns1: '',
      selectedAns2: '',
      selectedAns3: '',
      selectedAns4: '',
      selectedAns5: ''

    }
    this.selectOne = this.selectOne.bind(this);
    this.selectTwo = this.selectTwo.bind(this);
    this.selectThree = this.selectThree.bind(this);
    this.selectFour = this.selectFour.bind(this);
    this.selectFive = this.selectFive.bind(this);
    this.submitRdOne = this.submitRdOne.bind(this);
  }

  componentDidMount() {
    axios
      .get('/words', {
        params: {
          quant: 10,
          firstLet: false
        }
      })
      .then((result) => {
        var packet = {}
        var altWordsArray = result.data;
        // console.log('altwordsArr', altWordsArray);
        for (var i = 0; i < 5; i++) {
          packet[i + 1] = [altWordsArray[i * 2], altWordsArray[i * 2 + 1]]
        }
        console.log('packet', packet);
        this.setState({
          altWords: packet
        })
      })
      .catch((err) => {
        console.log('something went wrong fetching words');
      })
  }

  selectOne(event) {
    this.setState({
      selectedAns1: event.target.className
    })
    event.preventDefault();
  }
  selectTwo(event) {
    this.setState({
      selectedAns2: event.target.className
    })
    event.preventDefault();
  }
  selectThree(event) {
    this.setState({
      selectedAns3: event.target.className
    })
    event.preventDefault();
  }
  selectFour(event) {
    this.setState({
      selectedAns4: event.target.className
    })
    event.preventDefault();
  }
  selectFive(event) {
    this.setState({
      selectedAns5: event.target.className
    })
    event.preventDefault();
  }
  submitRdOne(){
    console.log('submitRdOne called');
    var spanishWords = Object.values(this.props.spaWords);
    console.log('spanishWords', spanishWords);

    //compare state items to this.props.spaWords,
    //if match, this.state.score++
  }

  render() {
    var qOneAns = this.state.altWords[1].concat(this.props.spaWords['one']);
    var qTwoAns = this.state.altWords[2].concat(this.props.spaWords['two']);
    var qThreeAns = this.state.altWords[3].concat(this.props.spaWords['three']);
    var qFourAns = this.state.altWords[4].concat(this.props.spaWords['four']);
    var qFiveAns = this.state.altWords[5].concat(this.props.spaWords['five']);

    //create an array of five values, randomly picked from the range 0-2
    const randomIndices = [];
    for (var i = 0; i < 5; i++) {
      randomIndices.push(Math.floor(Math.random() * Math.floor(3)));
    }
    //for each Ans array, splice out that vlaue, than push it on
    var extraOne = qOneAns.pop();
    qOneAns.splice(randomIndices[0], 0, extraOne);

    extraOne = qTwoAns.pop();
    qTwoAns.splice(randomIndices[1], 0, extraOne);

    extraOne = qThreeAns.pop();
    qThreeAns.splice(randomIndices[2], 0, extraOne);
    console.log('qThreeAns', qThreeAns);

    extraOne = qFourAns.pop();
    qFourAns.splice(randomIndices[3], 0, extraOne);

    extraOne = qFiveAns.pop();
    qFiveAns.splice(randomIndices[4], 0, extraOne);


    return (
      <div>
        <div>
          Select the correct answer for each word.
          <br></br>
          <div>
            {/* q1 */}
            <div>Select the correct translation for {this.props.engWords['one']}</div>
            <br></br>
            <button className={qOneAns[0]} onClick={this.selectOne} >
              {qOneAns[0]}
            </button>
            <button className={qOneAns[1]} onClick={this.selectOne} >
              {qOneAns[1]}
            </button>
            <button className={qOneAns[2]} onClick={this.selectOne} >
              {qOneAns[2]}
            </button>
            <div></div>
          </div>
          <div>
            {/* q2 */}
            <div>Select the correct translation for {this.props.engWords['two']}</div>
            <br></br>
            <button className={qTwoAns[0]} onClick={this.selectTwo} >
              {qTwoAns[0]}
            </button>
            <button className={qTwoAns[1]} onClick={this.selectTwo} >
              {qTwoAns[1]}
            </button>
            <button className={qTwoAns[2]} onClick={this.selectTwo} >
              {qTwoAns[2]}
            </button>
          </div>
          <div>
            {/* q3 */}
            <div>this.select the correct translation for {this.props.engWords['three']}</div>
            <br></br>
            <button className={qThreeAns[0]} onClick={this.selectThree} >
              {qThreeAns[0]}
            </button>
            <button className={qThreeAns[1]} onClick={this.selectThree} >
              {qThreeAns[1]}
            </button>
            <button className={qThreeAns[2]} onClick={this.selectThree} >
              {qThreeAns[2]}
            </button>
          </div>
          <div>
            {/* q4 */}
            <div>this.select the correct translation for {this.props.engWords['four']}</div>
            <br></br>
            <button className={qFourAns[0]} onClick={this.selectFour} >
              {qFourAns[0]}
            </button>
            <button className={qFourAns[1]} onClick={this.selectFour} >
              {qFourAns[1]}
            </button>
            <button className={qFourAns[2]} onClick={this.selectFour} >
              {qFourAns[2]}
            </button>
          </div>
          <div>
            {/* q5 */}
            <div>this.select the correct translation for {this.props.engWords['five']}</div>
            <br></br>
            <button className={qFiveAns[0]} onClick={this.selectFive} >
              {qFiveAns[0]}
            </button>
            <button className={qFiveAns[1]} onClick={this.selectFive} >
              {qFiveAns[1]}
            </button>
            <button className={qFiveAns[2]} onClick={this.selectFive} >
              {qFiveAns[2]}
            </button>
          </div>
          {/* {questionSet} */}
        </div>
        <br></br>
        <button onClick={this.submitRdOne}>Submit Answer for this round</button>
      </div>

    );
  }
}

export default RoundOne;

