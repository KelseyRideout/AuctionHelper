var express = require('express');
var mysql = require('mysql2');
var path = require('path');
var serveStatic = require('serve-static');
require('dotenv').config();
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
var hostname = '127.0.0.1';

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });

 var con = mysql.createConnection({
    host: process.env.HOST,
    user: "dev",
    password: process.env.DATABASE_PASSWORD,
    database: "auctionHelper"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // con.query("SELECT * FROM testing", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    // });
});