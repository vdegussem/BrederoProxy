const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 10000; 

cors_proxy.createServer({
    originWhitelist: [], // Staat alles toe
    requireHeader: [],   // VERWIJDERT de verplichting voor speciale headers
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
