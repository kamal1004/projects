const express = require('express');
var request = require("request");
const app = express();
const port=5000;

app.get("/final",(req,res)=>{
  request(
    "https://ptsv2.com/t/q4me0-1633333501/d/6162765639057408",
    function (errror, response, body){
      if(!error && response.statusCode==200){
        var parsedBody = JSON.parse(body);
        var a =  parsedBody["n1"];
        var b =  parsedBody["n2"];
      }
    }
  );
});

app.post("http://localhost:3000/answer", function(req, res){
  var c = a + b;
  res.send("The result is "+ c);
});

app.listen(5000, function(){console.log("server is running on port 5000.")});

// const express = require('express'); //Line 1
// const app = express(); //Line 2
// const port = process.env.PORT || 5000; //Line 3
//
// // This displays message that the server running and listening to specified port
// app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
// app.get("/", function(req, res){ //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// });





// app.get("/", function(req, res){
// const getval = async () => {
//   try {
//     return await axios.get('http://localhost:3000/')
//   } catch (error) {
//     console.error(error)
//   }
// }
// });
//
// app.post("/", function(req, res){
//
//   var a = Number(req.body.n1);
//   var b = Number(req.body.n2);
//   var c = a + b;
//   res.send("The result is "+ c);
// });
// app.listen(5000, function(){
//   console.log("server is running on port 3000.")
// });
