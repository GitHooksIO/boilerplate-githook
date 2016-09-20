module.exports = function (data, process) {

    var request = require('request');

    if (data.payload.ref_type === 'tag') {
        // A new tag was created!
        // This particular GitHook cares about that, but your mileage may vary.

        var options = {
            url:      data.parameters.url,
            headers: {
                'Content-Type':  'application/json',
                'User-Agent':    'githooks-io',
                'Authorization': 'token ' + data.access_token
            },
            json: {
                foo: data.parameters.bar
            }
        };

        request.post(options, function (err, httpResponse, body) {
            if (err) {
                process.fail('Fail! Response: ' + err);
            }
            else {
                process.succeed('Success! Response:' + body);
            }
        });
    }
    else {
        process.succeed('This GitHook did not have to do anything.');
    }

};
