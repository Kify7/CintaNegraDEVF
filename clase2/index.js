const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express()
const port = 4000

app.use(bodyParser.json())

// Endpoint que responda {  “mensaje”: <Lo que venga del parametro> }
app.get('/hello/:chanel', (req, res) => {
  res.send({mensaje: `Hey Arnold! en ${req.params.chanel}`})
  console.log('You did it!');
})

// Endpoint que simule acceso a un api a través del login
app.get('/cuenta/:name', (req, res) => {
    res.send({saludo: `Hola${req.params.name}`})
    console.log('You are logged!');
  })

// Endpoint pokemon reciba el numero de id o el nombre del pokémon y lo busque en la pokeapi (Axios)
const id = 150;
axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => {
    console.log('cool');
  })
  .catch(error => {
    console.log(error);
  });

// ejemplo de usop query params en endpoint tipo get
app.get('/ejemplo:soyQuery', ({ soyQuery }, response) => {
    (!soyQuery) ? response.send('No Hay un query!')
    : response.send(soyQuery);
  });

  // ejemplo de uso de body con tres endpoint
app.post('/post', ({body},response)=>{
    response.send(body)
})

app.listen(port, () => {
  console.log(`Se ha inicado la app en el puerto:${port}`)
})






// ejemplo de uso de parametros endpoint tipo get

// delete, put  y patch