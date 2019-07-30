#!/usr/bin/env node

const express = require('express');
const bodyParser = require('body-parser');

const startProducer = require('./producer');

const app = express();

const CONFIG = {
    PORT: process.env.PORT || 9000
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/v1/messages', (req, res) => {

    const message = req.body;

    console.log('[+] Sending message', message);

    startProducer(message);

    res.json({ sent: true, data: message});
});

if(require.main === module) {
    app.listen(CONFIG.PORT, () => {
        console.log(`[+] Server Started on Port: ${CONFIG.PORT}`);
    });
};
  