const http = require('http');

// Define the port we want to listen on
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'X-Custom-Header': 'CustomHeaderValue'
    });

    // HTML response
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <body>Node response</body>
    </html>
  `;

    // Send the response
    res.end(htmlContent);
});

// Make the server listen on port 80
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
