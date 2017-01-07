var client = require('./connection.js');

client.search({
  index : "gov",
  type : "constituencies",
  body :{
    query : {
      match : {"ConstituencyName" : "ranchi"}
    }
  }
},function(err,resp,status){
  if(err){
    console.log("error",err)
  }
  else{
    console.log("Response",resp);
  }
});
