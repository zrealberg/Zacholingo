const axios = require('axios');

const translator = async function(wordObj) {

  console.log('translator called, heres my obj', wordObj);
  // const wordArr = Object.values(wordObj);
  // console.log('wordArr', wordArr);
  const spaWordObj = {};
  try {
    for (const key in wordObj) {
      const word = wordObj[key];
      await axios.get(`https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=d0544302-c7cf-463b-ba99-844abbb4303c`)
          .then((result) => {
            console.log('result.data[0].shortdef[0] from the get to MW', result.data[0].shortdef[0]);
            spaWordObj[key] = result.data[0].shortdef[0];
          })
    }
  } catch(e) {
    console.log('an error in translator');
    console.log(e);

  }

  console.log('sp word obj', spaWordObj);
  return spaWordObj;
};


module.exports = translator;