import React from "react";

const Start = ({ handleInputWords, submit }) => {
  return (
    <div>
      <h3>What five words would you like to learn today?</h3>
      <div>Please enter the five English words you want to learn in Spanish</div>
      <form>
        <p>Word #1</p>
        <input type="text" name='one' onChange={handleInputWords}/>
        <p>Word #2</p>
        <input type="text" name='two' onChange={handleInputWords}/>
        <p>Word #3</p>
        <input type="text" name='three' onChange={handleInputWords}/>
        <p>Word #4</p>
        <input type="text" name='four' onChange={handleInputWords}/>
        <p>Word #5</p>
        <input type="text" name='five' onChange={handleInputWords}/>
      </form>
      <br></br>
      <button onClick={submit}>START</button>
    </div>
  );
};

export default Start;
