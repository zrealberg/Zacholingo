import React from "react";

const Start = ({ handleInputWords }) => {
  return (
    <div>
      <h3>What five words would you like to learn today?</h3>
      <div>Please enter the five English words you want to learn in Spanish</div>
      <form>
        <p>Word #1</p>
        <input type="text" name='1' onChange={handleInputWords}/>
        <p>Word #2</p>
        <input type="text" name='2' onChange={handleInputWords}/>
        <p>Word #3</p>
        <input type="text" name='3' onChange={handleInputWords}/>
        <p>Word #4</p>
        <input type="text" name='4' onChange={handleInputWords}/>
        <p>Word #5</p>
        <input type="text" name='5' onChange={handleInputWords}/>
      </form>
      <button>START</button>
    </div>
  );
};

export default Start;
