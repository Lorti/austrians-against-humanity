const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const answers = require('./answers.json');
const questions = require('./questions.json');

const source = fs.readFileSync(__dirname + '/template.hbs', 'utf8');
const template = handlebars.compile(source);

handlebars.registerHelper('breaklines', function(text) {
    text = handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new handlebars.SafeString(text);
});

fs.writeFileSync('answers.html', template({ class: 'answer', cards: answers }));
fs.writeFileSync('questions.html', template({ class: 'question', cards: questions }));
