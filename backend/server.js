const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path =  require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Works Well!' });
});

app.use(require('./routes'));

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`[*] Server gogo~! ${PORT}.`);
});
