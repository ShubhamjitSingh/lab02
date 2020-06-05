const express = require('express');
const app = express();
const https = require('https');

app.get('/', (request, response) => (
    https.get('https://insult.mattbas.org/api/insult' , resp => {
        resp.on('data', chunk => {
            response.send(`
                <http>
                <head><title>Oh Snap</title></head>

                <body>
                    <h1>Oh Snap</h1>
                    <p style="font-sizze: 24px; color: red;">
                    ${chunk.toString()}!
                    </p>
                </body>
            </http>
            `);
        });
    })
));

app.listen(3000);