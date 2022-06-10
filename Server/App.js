const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});
app.get('/', (req, res) => {
    let response = { value: "true" }
    res.json(response);
});