var mysql=require('mysql');
 /*var connection=mysql.createPool({

host:'localhost',
 user:'root',
 password:'',
 database:'pupilPlace'

});*/
var connection=mysql.createPool({

host:'db102b.pair.com',
user:'aisltd_17',
password:'XVfgFp8v',
database:'aisltd_alc'

});
 module.exports=connection;
