import React from "react";
import axios from 'axios';
import Question from './Question';

//this is how I had things set up before 7:15 PM tonight

// class RoundOne extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       altWords: {
//         1: ['ab', 'cd'],
//         2: ['ab', 'cd'],
//         3: ['ab', 'cd'],
//         4: ['ab', 'cd'],
//         5: ['ab', 'cd']
//       },
//       selectedAns: {
//         1: '',
//         2: '',
//         3: '',
//         4: '',
//         5: ''
//       }
//     }
//     this.grabAnswers = this.grabAnswers.bind(this);
//     this.submitRdOne = this.submitRdOne.bind(this);
//   }

//   componentDidMount() {
//     axios
//       .get('/words', {
//         params: {
//           quant: 10,
//           firstLet: false
//         }
//       })
//       .then((result) => {
//         var packet = {}
//         var altWordsArray = result.data;
//         // console.log('altwordsArr', altWordsArray);
//         for (var i = 0; i < 5; i++) {
//           packet[i + 1] = [altWordsArray[i * 2], altWordsArray[i * 2 + 1]]
//         }
//         console.log('packet', packet);
//         this.setState({
//           altWords: packet
//         })
//       })
//       .catch((err) => {
//         console.log('something went wrong fetching words');
//       })
//   }

//   grabAnswers(event) {
//     console.log('gran answers called');
//     console.log('event.target', event.target);
//     // const target = event.target;
//     // const name = target.name;
//     // var english = this.state.english;
//     // english[name] = event.target.value
//     // this.setState({
//     //   english
//     // });

//     event.preventDefault();
//   }

//   submitRdOne(){
//     console.log('submitRdOne called');
//   }

//   render() {
//     const spaWordsArray = [];
//     //turn the spanish words object into an array with the index and values as couplets therein
//     // console.log('this.props.spaWords', this.props.spaWords);
//     for (var key in this.props.spaWords) {
//       spaWordsArray.push([key, this.props.spaWords[key]])
//     }
//     console.log('spaWordsArray', spaWordsArray);
//     // [["one", "sí"], ["two", "gato"] .. . ]
//     const questionSet = spaWordsArray.map((couplet, index) => (
//       <div>
//         <Question
//           eword={this.props.engWords[couplet[0]]}
//           sword={couplet[1]}
//           alts={this.state.altWords[index + 1]}
//           grabAnswers={this.grabAnswers}
//         />
//       </div>
//     ));
//     return (
//       <div>
//         <div>
//           Select the correct answer for each word.
//           {questionSet}
//         </div>
//         <button onClick={this.submitRdOne}>Submit Answer for this round</button>
//       </div>

//     );
//   }
// }

// export default RoundOne;