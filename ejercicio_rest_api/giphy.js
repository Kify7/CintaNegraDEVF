
const axios = require('axios');
// Giphy API
const getGifs = (query) => {
    const URI = `https://api.giphy.com/v1/gifs/search?api_key=AwF7TLgmC9XUe03VlTUMbaHUOgCS1S0u&q=${query}&limit=5`
    axios.get(URI)
      .then((res) => {
        console.log(res.data.data);        
      })
      .catch(((error) => {
        console.log();(error);
      }))
  }
  getGifs();