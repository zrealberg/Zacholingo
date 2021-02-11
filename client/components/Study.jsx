import React from "react";
import OneWord from './OneWord'

const Study = ({ engWords, spaWords, beginGameplay }) => {

  var engWordsArr = Object.values(engWords);
  var ewArr = engWordsArr.map((word) => (
    <div>
      <OneWord key={word} word={word}/>
    </div>
  ))

  var spaWordsArr = Object.values(spaWords);
  var swArr = spaWordsArr.map((word) => (
    <div>
      <OneWord key={word} word={word}/>
    </div>
  ))

  return (
    <div>
      <h2>Time to study!</h2>
      <div>Here are the words you selected and their translations, as provided by
        Merriam Webster
      </div>
      {ewArr}
      {swArr}
    <br></br>
    <button onClick={beginGameplay}>Click me to begin the quiz</button>
    </div>
  )
}

export default Study;