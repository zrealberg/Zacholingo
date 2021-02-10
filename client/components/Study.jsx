import React from "react";
import OneWord from './OneWord'

const Study = ({ engWords, spaWords }) => {

  var engWordsArr = Object.values(engWords);
  var ewArr = engWordsArr.map((word) => (
    <div>
      <OneWord word={word}/>
    </div>
  ))

  var spaWordsArr = Object.values(spaWords);
  var swArr = spaWordsArr.map((word) => (
    <div>
      <OneWord word={word}/>
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
    </div>
  )
}

export default Study;