const http = require('http');
const fs = require('fs');

// Define the port we want to listen on
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {

    const file = req.url.replace('/node/', '');
    const key = file.replace('.html', '');

    // Set response headers
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Surrogate-Key': 'node-' + key + ', ' + key
    });

    // HTML response
    fs.readFile('/static/' + file, (err, data) => {
        // Send the response
        res.end(data);
    })

});

// Make the server listen on port 80
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
