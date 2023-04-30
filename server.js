const path=require('path');
const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{

//    console.log(req.url);   

if(req.url==='/')
{
    res.end('<h1>Home is a a  world</h1>');         
}
});

const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`Server running on ${PORT}`));

