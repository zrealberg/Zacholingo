import React from "react";
import axios from 'axios';

class RoundOne extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      altWords = []
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
        console.log('here is my result from the word fetcher', result);
        this.setState({
          altWords: result
        })
      })
      .catch((err) => {
        console.log('something went wrong fetching words');
      })
  }

  render() {
    return (
      <div>
        Select the correct answer for each word.

      </div>
    );
  }
}

export default RoundOne;