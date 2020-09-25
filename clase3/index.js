// dependencias
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

// definir api y puerto
const api = express();
const PORT = process.env.PORT || 4000;

// Middleware para cada endpoint de la API
api.use(
  express.json({
    extended: true,
  })
);

// Conexión a la base de datos
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error));

// MODELS
// Creando Schema
const perroSchema = new mongoose.Schema({
  name: String,
  race: String,
  age: Number,
  owner: {
    type: String,
    required: true,
  },
});
// Crear Modelo a partir del Schema
const Perros = mongoose.model("Perrros Bonitos", perroSchema);

// Controlers

api.get("/", (reg, res) =>
  res.status(200).json({
    message: "Esta vivoooo!!",
  })
);

api.post("/api/v2/create/dog", (req, res) => {
  const { name, race, age, owner } = req.body;

  const newDog = new Perros({
    name,
    race,
    age,
    owner,
  });
  newDog
    .save()
    .then((resMongo) => res.status(201).json(resMongo))
    .catch((err) =>
      res.status(400).json({
        ...err,
        error: err.message,
      })
    );
});

api.get("/api/v2/LIST/dog", (req, res) => {
  Perros.find()
    .then((resMongo) => res.status(201).json(resMongo))
    .catch((err) =>
      res.status(400).json({
        ...err,
        error: err.message,
      })
    );
});

api.listen(PORT, () => {
  console.log(`Server Initialized on htpp://localhost:${PORT}`);
});
