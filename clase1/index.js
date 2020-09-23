const axios = require('axios');

const SearchPokemon = async(param) => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`)
        console.log(response.data.name);
    } catch(error) {
        throw new Error('error');
    }
};
SearchPokemon('120');
