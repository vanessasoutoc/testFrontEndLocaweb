let $ = require('jquery');

const ess = ['ES6', 'ES7', 'ES8'];

ess.forEach(es => {
  $('body').append('<h1>'+ es +'</h1>');
});