var mysql=require('mysql');
 var connection=mysql.createPool({

host:'localhost',
 user:'root',
 password:'',
 database:'pupilPlace'

});
 module.exports=connection;
