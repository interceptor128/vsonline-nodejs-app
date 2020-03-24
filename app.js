const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (rep, res) => res.send('The app is running!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));