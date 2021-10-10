const express = require('express');
var request = require("request");
const https = require('https');
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/ans",function(req, res){
  const url = 'https://getpantry.cloud/apiv1/pantry/bd119e09-40af-4668-adae-3f270fc9886f/basket/add'
  https.get(url,function(response){
  
    console.log(response.statusCode);
    response.on("data",function(data){
      const e=JSON.parse(data)
      const a = e.n1
      const b = e.n2
      const c = e.opt

      if(c==='add'){
        var d = a+b;
        res.send({d});
      }
      else if (c==='Subtract') {
        var d = a-b;
        res.send({d});

      }
      else if (c ==='Multiply') {
        var d = a*b;
        res.send({d});
      }
      else {
        var d = a/b;
        res.send({d});

    }
      console.log(d)
    })
  })
});



app.listen(5000,function(){
  console.log("running at 5000")
})
// app.get("/",(req,res)=>{
// https.get('https://getpantry.cloud/apiv1/pantry/bd119e09-40af-4668-adae-3f270fc9886f/basket/add', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);
//
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
//
// }).on('error', (e) => {
//   console.error(e);
// });

// app.get("/",(req,res)=>{
// const url = "https://getpantry.cloud/apiv1/pantry/bd119e09-40af-4668-adae-3f270fc9886f/basket/add",
//   https.get(url, function(response{
//     console.log(response.statusCode)
//   }))
// app.get("/",(req,res)=>{
//   request(
//     "https://getpantry.cloud/apiv1/pantry/bd119e09-40af-4668-adae-3f270fc9886f/basket/add",
//     function (errror, response, body){
//       if(!error && response.statusCode==200){
//         var parsedBody = JSON.parse(body);
//         var a =  parsedBody["n1"];
//         var b =  parsedBody["n2"];
//         var c =  parsedBody["opt"];
//         console.log(parsedBody)
//       }
//     }
//   );
// });
