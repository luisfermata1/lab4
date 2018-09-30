var http = require('http');
url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var nombre = url.parse(req.url, true);
  res.write('Hola '+ nombre.path.substring(1,nombre.path.lenght));
  res.end();
}).listen(4300);