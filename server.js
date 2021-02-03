const http = require('http');

http.createServer(function (req,res){
  res.write('Aktif');
  res.end();
}).listen(8000); 