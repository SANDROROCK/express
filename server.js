const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Conecta no MongoDB
mongoose.connect(
  "mongodb+srv://admin:qweasd123@cluster0-8iddq.mongodb.net/chat?retryWrites=true&w=majority",{ useNewUrlParser: true }
);

// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3000);
