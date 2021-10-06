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
        var c =  parsedBody["opt"]
      }
    }
  );
});

app.post("http://localhost:3000/", function(req, res){
  if(c==='add'){
    var d = a+b;
    res.send("The result is "+ d);
  }
  else if (c==='subtract') {
    var d = a-b;
    res.send("The result is "+ d);

  }
  else if (c ==='Multiply') {
    var d = a*b;
    res.send("The result is "+ d);
  }
  else {
    var d = a/b;
    res.send("The result is "+ d);
  }
  });

app.listen(5000, function(){console.log("server is running on port 5000.")});
