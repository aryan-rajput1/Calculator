// import all the important dependecies and functions for node js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/calculator.html");
});

app.get('/bmicalc', (req, res) => {
    res.sendFile(__dirname + "/bmicalc.html");
});

app.post('/bmicalc', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height ** 2);
    res.send({ bmi });
  });

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
