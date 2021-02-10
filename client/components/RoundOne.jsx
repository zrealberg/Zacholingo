import React from "react";
import axios from 'axios';
import Question from './Question';

class RoundOne extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      altWords: {}
      //needs to be an object, indexes from 1-5 (0-4?), an array with two words per key

    }
  }

  componentDidMount() {
    console.log('cDM called');
    axios
      .get('/words', {
        params: {
          quant: 10,
          firstLet: false
        }
      })
      .then((result) => {
        console.log('here is my result from the word fetcher', result.data);
        var packet = {}
        var altWordsArray = result.data;
        console.log('altwordsArr', altWordsArray);
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

  render() {
    console.log('RoundOne, render called');
    const spaWordsArray = [];
    //turn the spanish words object into an array with the index and values as couplets therein
    console.log('this.props.spaWords', this.props.spaWords);
    for (var key in this.props.spaWords) {
      spaWordsArray.push([key, this.props.spaWords[key]])
    }
    console.log('spaWordsArray', spaWordsArray);
    const questionSet = spaWordsArray.map((word, index) => (
      <div>
        <Question
          eword={this.props.engWords[index]}
          sword={word}
          alts={this.state.altWords[index]}
        />
      </div>
    ))
    return (
      <div>
        Select the correct answer for each word.

      </div>
    );
  }
}

export default RoundOne;