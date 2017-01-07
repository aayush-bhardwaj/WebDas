var client = require("./connection.js");

//delete an index
client.indices.delete({
  index : "gov"
},function(err,resp,status){
  console.log("delete",resp);
});
