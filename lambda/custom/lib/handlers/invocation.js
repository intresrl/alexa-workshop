const messages = require('./../messages');

const InvocationHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(messages.WELCOME)
            .withShouldEndSession(false)
            .getResponse();
    },
};

module.exports = InvocationHandler;
