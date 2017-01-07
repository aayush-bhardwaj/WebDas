var client = require("./connection.js");

client.delete({
  index : "gov",
  type : "constituencies",
  id :1,
},function(err,resp,status){
  console.log("delete",resp);
});
