const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const messages = [];

app.get('/api/messages', (req, res) => {
    res.json(messages);
});


app.post('/api/messages', (req, res) => {
    const message = req.body.message;
    messages.push(message);
    res.json({ success: true });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
