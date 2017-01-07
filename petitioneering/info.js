var client = require('./connection.js');

//create an index
client.indices.create({
  index: 'gov'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});

//count the nos of documents in an index
client.count({
  index : "gov",
  type : "constituencies"
},function(err,resp,status){
  console.log("count",resp);
});
