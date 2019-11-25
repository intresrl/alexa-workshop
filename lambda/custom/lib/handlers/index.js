const ErrorHandler = require('./error');
const StopHandler = require('./stop');
const HelpHandler = require('./help');
const InvocationHandler = require('./invocation');
const StartHandler = require('./start');
const QuestionHandler = require('./question');

module.exports = {
    error: [
        ErrorHandler,
    ],
    request: [
        StopHandler,
        HelpHandler,
        InvocationHandler,
        StartHandler,
        QuestionHandler,
    ],
};
