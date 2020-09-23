// API de bromas JokeAPI
const axios = require('axios');

axios.get('https://sv443.net/jokeapi/v2/joke/Any')
  .then(response => {
    console.log(response.data.category);
    console.log(response.data.setup);
    console.log(response.data.delivery);
  })
  .catch(error => {
    console.log(error);
  });