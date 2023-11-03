const mysql = require("mysql");

const Connection = mysql.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "mysqlserver",
    database : "enquiry"
});

Connection.connect((err)=>{
    if(err)
    {
        console.log("Error at connecting Database \n ", err);
    }
    else
    {
        console.log("Database Connected Successfully");
    }
});


module.exports = Connection;
