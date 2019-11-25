const lodash = require('lodash');

const questions = require('./../data/questions');
const results = require('./../data/results');

class Status {
    constructor(name) {
        this.name = name;
        this.questionNumber = 0;
        this.availableQuestions = questions;
        this.question = {};
        this.points = 0;
    }

    static restore({name, questionNumber, availableQuestions, question, points}) {
        const status = new Status(name);
        status.questionNumber = questionNumber;
        status.availableQuestions = availableQuestions;
        status.question = question;
        status.points = points;
        return status;
    }

    getNextQuestion() {
        this.questionNumber += 1;
        this.question = lodash.sample(this.availableQuestions);
        lodash.remove(this.availableQuestions, (question) => question.id === this.question.id);
        return this.question;
    }

    checkAnswer(answer) {
        let isCorrect = false;
        if (this.question.answer === answer) {
            this.points += 1;
            isCorrect = true;
        }
        return isCorrect;
    }

    getResult() {
        return lodash.find(results, ['points', this.points]);
    }
}

module.exports = Status;
