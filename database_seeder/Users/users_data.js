const mysql = require('mysql');
var async = require('async');

var fs = require('fs');

var content = fs.readFileSync('Users/users_data.json');
var values = JSON.parse(content);


const con = mysql.createConnection({
  host     : 'localhost',
  port     :  3306,
  user     : 'root',
  password : 'root@123',
  database : 'mashupfy'
});

console.log("\n Feeding database... \n");


function save_row_to_db (post, callback) {
  con.query('INSERT INTO users SET ?', post, callback);
}

function finished(err) {
  if (err) throw err;
  con.end();
  console.log('done');
}

async.eachLimit(values, 20, save_row_to_db, finished);
