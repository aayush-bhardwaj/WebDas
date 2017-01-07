var client = require('./connection.js');

//add a document to an index
client.index({
  index:"gov",
  id:"1", // optional if not ES gives a default id to the document
  type:"constituencies",
  body : {
    "ConstituencyName":"Ranchi",
    "ConstituencyID":"1234",
    "ConstituencyType":"lol",
    "Electorates":2222,
    "ValidVotes":5555,
  }
},function(err,resp,status){
    console.log(resp);
  });
