const messages = {
    WELCOME: '<say-as interpret-as="interjection">Ciao!</say-as> Pronuncia "Inizia gioco" per iniziare, oppure "Stop" per uscire.',
    START_GAME: 'Dovrai rispondere a 5 domande. Pronuncia "Nome" seguito dal tuo nome.',
    ERROR: '<say-as interpret-as="interjection">Uffa!</say-as> Si è verificato un errore!',
    HELP: 'Il gioco consiste in 5 domande di cultura generale. Pronuncia "Inizia gioco" per iniziare, oppure "Stop" per uscire.',
    STOP: '<say-as interpret-as="interjection">Arrivederci!</say-as>',
    LAST_QUESTION: 'Ultima domanda.',
    NEXT_QUESTION: 'Domanda {number}.',
    QUESTION_INSTRUCTIONS: 'Pronuncia "Risposta" seguito dal numero della risposta.',
    QUESTION: '{text}<break time="1s"/>',
    OPTION: 'Risposta {number}. {text}.<break time="1s"/>',
    CORRECT_ANSWER: 'Risposta esatta!<break time="1s"/>',
    WRONG_ANSWER: 'Risposta sbagliata!<break time="1s"/>',
    RESULT: '{name}, hai totalizzato {points}.<break time="1s"/> {description}<break time="1s"/>',
};

module.exports = messages;
