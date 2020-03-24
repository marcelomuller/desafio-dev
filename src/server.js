const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.set('views', './views/');

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/resultado', (req, res) => {
    let calcResult = calcDivisors(Number(req.body.inputNumber));
    res.render("resultado", { divisors: calcResult[0], prime: calcResult[1] });
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
  });

function calcDivisors(num) {
    let res = [];
    let prime = false;

    let divisors = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisors++;
            res.push(i);
        }
    }
    if (divisors == 2) {
        prime = true;
    }
    return [res, prime];
}