var boscode = require('boscode');
var perfy = require('perfy');
var Mind = require('mind');
var brain = require('brain.js');
var fs = require('file-system');

//A search engine capable of understanding a sentance (File, location, food) and providing an answer

var Scarlet = function () {
  var introduce = boscode.display('Eg; Where can I get food, Where am I, Who is, Why does...');
  var question = boscode.get('How can I help you? ').toLowerCase();
  var arrQuestion = question.split(" ");
  var arrQuestionFixed = [];

  for (var i = 0; arrQuestion.length > i; i++) {
    if (arrQuestion[i] !== 'the') {
      arrQuestionFixed.push(arrQuestion[i]);
    }
  }
  arrQuestion = arrQuestionFixed;

  //Where=0.1, Tell=0.2, How=0.3, Why=0.4
  if (arrQuestion[0] === "where") {

      if (arrQuestion[1] === "is") {
        //START OF CONTEXT TO DECIMAL
      }
  } else if (arrQuestion) {

  }

  //START OF DETAIL TO DECIMAL, THIS REQUIRES LEARNING FOR DIFFERENT WORDS (eg, learn things are the same food, lunch, etc.)
  if (arrQuestion[arrQuestion.length-1] === 'food') {

  }

  //INITIALISE NEURAL NETWORK
  var net = new brain.NeuralNetwork();
  //j=joke, w=where, r=result; THIS IS WHAT I HOPE TO ACHIEVE BUT IT HAS TO BE IN DECIMALS
  net.train([{input: {f:'Where can I get food'}, output: {fr:'At the Dee Why Grand'}},
             {input: {f:'Where is food'}, output: {fr:'At the Dee Why Grand'}},
             {input: {f:'Im hungry'}, output: {fr:'Run to the canteen'}},
             {input: {j:'Tell me a joke'}, output: {jr:'Did you know the first cimputer had one byte of memory, then everything crashed'}}]);

  //eg; f:0.01
  var output = net.run({});


  boscode.display(output);
  boscode.display('Was this a good answer? (y/n) ');
  var goodOrNot = boscode.get();
  //INDIVIDUAL LEARNING PER PERSON LOADING FROM PROFILE IN FILE, MAKE LOGIN TO LOAD SPECIFIC VALUES/SESSION
};

boscode.display("1. Scarlet");
boscode.display("2. Clear Console");
var itemNum = boscode.get();
if (itemNum === '1') {
  var lines = process.stdout.getWindowSize()[1];
  for(var i = 0; i < lines; i++) {
    console.log('\r\n');
  }
  var login = boscode.get('Login: ');

//NEEDS DEFAULT VALUES FOR NEW PEOPLE, AND RECOGNISE EXISTING LOGIN
var loginProfile = function () {
  var file = __dirname + '/info.json';
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }
    data = JSON.parse(data);
    data.forEach(function(user){
      console.log(user.name);
    });
  });
};


  Scarlet();
} else if (itemNum === '2') {
  process.stdout.write("\u001b[2J\u001b[0;0H");
}
