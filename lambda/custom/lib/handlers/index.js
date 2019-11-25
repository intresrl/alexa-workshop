const ErrorHandler = require('./error');
const StopHandler = require('./stop');
const HelpHandler = require('./help');
const InvocationHandler = require('./invocation');
const StartHandler = require('./start');

module.exports = {
    error: [
        ErrorHandler,
    ],
    request: [
        StopHandler,
        HelpHandler,
        InvocationHandler,
        StartHandler,
    ],
};
