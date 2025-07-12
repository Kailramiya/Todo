// External Module
const express = require('express');

const { default: mongoose } = require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');

const app = express();
const DB_PATH = Your_database_path;

app.use(cors());
app.use(express.json());
app.use("/api/todo", require('./routes/todoRouter'));
app.use(require('./controllers/errors').pageNotFound);

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3001;

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
