const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const messages = [
    {
        id: 1,
        name: "Masaki",
        content: "I love to play badminton.",
        read: false
    },
    {
        id: 2,
        name: "Bill Gates",
        content: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
        read: false
    },
    {
        id: 3,
        name: "Steve Jobs",
        content: "Design is not just what it looks like and feels like. Design is how it works.",
        read: true
    }
];

app.get('/', (rep, res) => res.send('The app is running!'));

app.get('/messages', (rep, res) => res.json(messages))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));