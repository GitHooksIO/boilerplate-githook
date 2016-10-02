module.exports = function (gh) {

    if (gh.data.payload.ref_type === 'tag') {
        // A new tag was created!
        // This particular GitHook cares about that, but your mileage may vary.

        var options = {
            url:      gh.data.parameters.url,
            json: {
                foo: data.parameters.bar
            }
        };

        gh.modules.authRequest.post(options, function (err, httpResponse, body) {
            if (err) {
                gh.process.fail('Fail! Response: ' + err);
            }
            else {
                gh.process.succeed('Success! Response:' + body);
            }
        });
    }
    else {
        gh.process.succeed('This GitHook did not have to do anything.');
    }

};
