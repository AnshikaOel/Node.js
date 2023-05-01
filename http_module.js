const http=require('http');
const url=require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(req.url);      // will give O/P in web browser
    console.log(req.url);    // will give O/P in console
    var q=url.parse(req.url,true).query;
    var text=q.year+" "+q.month;          // eg: http://localhost:2000/?year=2020&month=June
    res.end(text);
}).listen(2000);
