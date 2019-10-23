const mockserver = require('mockserver-node');
const mockServerClient = require('mockserver-client').mockServerClient;

const PORT = 8081;
const client = mockServerClient("localhost", PORT);

const API_URL = "/api";

mockserver.start_mockserver({
    serverPort: PORT,
    verbose: true
}).then(() => {

    const DATA = require('./test_data');
    const DEVICES = DATA.DEVICES;

    client.setDefaultHeaders([
        {'name': 'Content-Type', 'values': ['application/json; charset=utf-8']},
        {'name': 'Access-Control-Allow-Origin', 'values': ['*']}
    ], []);

    client.mockAnyResponse([
        {
            "httpRequest": {
                "method": "GET",
                "path": `${API_URL}/devices`
            },
            "httpResponse": {
                "body": JSON.stringify(DEVICES)
            }
        },

        {
            "httpRequest": {
                "method": "GET",
                "path": `${API_URL}/devices/${DEVICES[0].id}`
            },
            "httpResponse": {
                "body": JSON.stringify(DEVICES[0])
            }
        }

    ]).then(() => console.debug("Created mock routes!"), () => console.warn("Failed to create mock routes!"));

});