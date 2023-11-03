const Express = require("express");
const bodyParser = require("body-parser");
const port = 9000;
const router = require("./src/Router/Router");


const app = Express();

app.use(bodyParser.urlencoded({
   extended : true,
   limit: "50mb",
   parameterLimit : 100000000
}));

app.use(bodyParser.json());

app.use(router);

app.listen(port, ()=>{
   console.log("Server is running at port no : ", port);
});
