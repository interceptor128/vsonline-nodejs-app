const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let messages = [];
let id = 1;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('The app is running!')
});

app.get('/message', (req, res) => {
    res.json(messages)
});

// ~/messages/2
app.get('/messages/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let flag = false;

    for(let i = 0; i < messages.length; i++) {
        if(messages[i].id === id) {
            res.json(messages[i]);
            flag = true;
            break;
        };
    };

    if(!flag) {
        res.send('Can not find any messages with ID');
    };
});

app.post('/messages', (req, res) => {
    let body = req.body;
    let new_message = {
        id: id++,
        name: body.name,
        content: body.content,
        read: body.read
    }

    messages.push(new_message);
    res.send('New message added!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});