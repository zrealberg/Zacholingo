const axios = require('axios');

const translator = async function(wordObj) {

  console.log('translator called, heres my obj', wordObj);
  const wordArr = Object.values(wordObj);
  console.log('wordArr', wordArr);
  const spaWordObj = {};
  try {
    wordArr.forEach((word) => {
      axios.get(`https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=d0544302-c7cf-463b-ba99-844abbb4303c`)
        .then((result) => {
          console.log('result.data[0].shortdef[0] from the get to MW', result.data[0].shortdef[0]);
        })
    })
  } catch(e) {
    console.log('an error in translator');
    console.log(e);

  }
  // axios.get(`https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=d0544302-c7cf-463b-ba99-844abbb4303c`)
};


module.exports = translator;