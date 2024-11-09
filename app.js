const http = require('http'), url = require('url');
http.createServer((cliReq, cliRes) => {
  const x = url.parse(cliReq.url);
  const opt = {host: x.hostname, port: x.port || 80, path: x.path,
             method: cliReq.method, headers: cliReq.headers};
  const svrReq = http.request(opt, svrRes => {
    cliRes.writeHead(svrRes.statusCode, svrRes.headers);
    svrRes.pipe(cliRes); });
  cliReq.pipe(svrReq);
}).listen(8080);
