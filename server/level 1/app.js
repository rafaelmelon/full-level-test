/* jshint esversion:6 */

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'The index page!' });
});

app.get('/sum/:a/:b', function (req, res) {
  let parseA = parseInt(req.params.a);
  let parseB = parseInt(req.params.b);
  res.render('result-sum', {
    paramA: parseA,
    paramB: parseB
  });
});

app.get('/mul/:a/:b', function (req, res) {
  let parseA = parseInt(req.params.a);
  let parseB = parseInt(req.params.b);
  res.render('result-mul', {
    paramA: parseA,
    paramB: parseB
  });
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
