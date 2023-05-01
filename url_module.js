const url=require('url');

var add='http://localhost:8080/default.htm?year=2017&month=february';
var q=url.parse(add,true);

console.log('host : '+q.host);
console.log('pathname : '+q.pathname);
console.log('search : '+q.search);
var qdata=q.query;
console.log('month : '+qdata.month);
console.log(q);
