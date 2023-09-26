const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('./test.html', {root: __dirname});
});

app.post('/', (req, res) => {

});

app.listen(2500, () => {
    console.log("listening on port 25000: ")
});