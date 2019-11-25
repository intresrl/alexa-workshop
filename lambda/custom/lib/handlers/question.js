const format = require("string-template");

const messages = require('./../messages');
const Status = require('./../status');

const MAX_QUESTIONS = 5;

const QuestionHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuestionIntent';
    },
    handle(handlerInput) {
        const attributes = handlerInput.attributesManager.getSessionAttributes();
        const {slots: {Name, Answer}} = handlerInput.requestEnvelope.request.intent;
        const status = attributes.status
            ? Status.restore(attributes.status)
            : new Status(Name.value);
        const answer = parseInt(Answer.value);
        const stopQuiz = status.questionNumber === MAX_QUESTIONS;

        const speechParts = [];
        if (answer) {
            speechParts.push(...this.getAnswerSpeechParts(status, answer));
        }
        if (!stopQuiz) {
            speechParts.push(...this.getNextQuestionSpeechParts(status));
        } else {
            speechParts.push(...this.getStopSpeechParts(status));
        }
        handlerInput.attributesManager.setSessionAttributes({
            status,
        });
        return handlerInput.responseBuilder
            .speak(speechParts.join(' '))
            .withShouldEndSession(stopQuiz)
            .getResponse();
    },
    getAnswerSpeechParts(status, answer) {
        const speechParts = [];
        const isCorrect = status.checkAnswer(answer);
        if (isCorrect) {
            speechParts.push(messages.CORRECT_ANSWER);
        } else {
            speechParts.push(messages.WRONG_ANSWER);
        }
        return speechParts;
    },
    getNextQuestionSpeechParts(status) {
        const speechParts = [];
        const {text, options} = status.getNextQuestion();
        if (status.questionNumber === MAX_QUESTIONS) {
            speechParts.push(messages.LAST_QUESTION);
        } else {
            speechParts.push(
                format(messages.NEXT_QUESTION, {
                    number: status.questionNumber,
                }),
            );
        }
        speechParts.push(
            format(messages.QUESTION, {
                text,
            })
        );
        options.forEach((option, index) => {
            speechParts.push(
                format(messages.OPTION, {
                    number: index + 1,
                    text: option,
                })
            );
        });
        speechParts.push(messages.QUESTION_INSTRUCTIONS);
        return speechParts;
    },
    getStopSpeechParts(status) {
        const speechParts = [];
        const {points, description} = status.getResult();
        speechParts.push(
            format(messages.RESULT, {
                name: status.name,
                points: points === 1 ? `${points} punto` : `${points} punti`,
                description,
            }),
            messages.STOP,
        );
        return speechParts;
    }
};


module.exports = QuestionHandler;
