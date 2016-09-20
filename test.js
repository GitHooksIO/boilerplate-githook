    // paste your personal access token here.
    // To find out where to get one, see https://help.github.com/articles/creating-an-access-token-for-command-line-use/
var access_token = '',

    // mock the payload information you expect to receive (according to the event type).
    // See https://developer.github.com/v3/activity/events/types/
    payload = {

    },

    // add any parameters you expect your GitHook to need. For example, githook-pr-editor has a 'template' parameter.
    // See http://githooks.io/githooks/GitHooksIO/githook-pr-editor.
    parameters = {
        'template': 'https://...'
    },

require('./githook')({
    access_token: access_token,
    parameters:   parameters,
    payload:      payload
}, {
    succeed: function (response) { console.log('marked as succeeded', response); },
    fail: function (response) { console.log('marked as failed', response); }
});
