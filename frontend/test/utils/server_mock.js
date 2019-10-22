const mockserver = require('mockserver-node');
const mockServerClient = require('mockserver-client').mockServerClient;

const PORT = 8081;
const client = mockServerClient("localhost", PORT);

const ROOT_URL = "/";
const API_URL = ROOT_URL + "/api";

mockserver.start_mockserver({
    serverPort: PORT,
    verbose: true
}).then(() => {
    client.mockAnyResponse([
        {
            "httpRequest": {
                "path": "/some/path"
            },
            "httpResponse": {
                "body": "some_response_body"
            }
        },

        {
            "httpRequest": {
                "path": "/some/path"
            },
            "httpResponse": {
                "body": "some_response_body"
            }
        }
    ]).then(
        function () {
            console.log("expectation created");
        },
        function (error) {
            console.log(error);
        }
    );

});