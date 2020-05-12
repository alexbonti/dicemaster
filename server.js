var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;


/// this function generates a random number
var randomNumber=function(max){
  return Math.floor(Math.random() * Math.floor(max));
} 



app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.get('/roll',function(request,response){
  var numberMax=request.query.number;
  var rolled=randomNumber(numberMax)
  response.send({rolledNumber:rolled})

})

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
