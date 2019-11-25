const messages = require('./../messages');

const StartHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'StartGameIntent';

    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(messages.START_GAME)
            .withShouldEndSession(false)
            .getResponse();
    },
};

module.exports = StartHandler;
