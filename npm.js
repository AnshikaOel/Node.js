const uc=require('upper-case');
const http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(uc.upperCase("hello world"));
   return res.end();
}).listen(2000);
