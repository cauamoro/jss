var http = require('http');



http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});



var dataAtual = new date();

var dataFormatada = datatuAltual.toDateString();



  res.end('caua moro!nData atual: ' + dataFormatada);

}).listen(8013);

