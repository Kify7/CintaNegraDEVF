// API de Criptomonedas
const axios = require('axios');
const consultarAPI = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const resultado = await axios.get(url);
    console.log(resultado.data.Data);
  };
  consultarAPI();