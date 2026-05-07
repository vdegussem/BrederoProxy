const cors_proxy = require('cors-anywhere');

// Render stelt de poort in via process.env.PORT
const host = '0.0.0.0';
const port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Staat alle domeinen toe
    requireHeader: [],   // Geen speciale headers nodig om de proxy te gebruiken
    removeHeaders: [
        'cookie',
        'cookie2',
        'x-frame-options',
        'content-security-policy',
        'set-cookie'
    ]
}).listen(port, host, function() {
    console.log('De WebTopping proxy draait op ' + host + ':' + port);
});
