const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Advice Slips';

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin",
    "*");
  response.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin",
    "*");
  response.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});


app.get('/', (request, response) => {
  response.send('To contribute advice to this API visit https://mnhollandplum.github.io/magic_8_ball/');
});

//get all slips of advice
app.get('/api/v1/slips', (request, response) => {
  database('slips').select()
    .then((slips) => {
      response.status(200).json(slips);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

//post a new advice slip
app.post('/api/v1/slips', (request, response) => {
  const slip = request.body;
  console.log(slip)

  database('slips').insert(slip, 'id')
    .then(slip => {
      response.status(201).json({ "slip": request.body })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});


module.exports = app
