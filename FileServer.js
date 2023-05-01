const http=require('http');
const fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('fileserver.html',function(err,data)           //  fs.readFile helps to read file on system
    {
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(data);
        res.end();
    });

}).listen(2000);

// fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created

fs.appendFile('hello.txt','hello creating file throw append',function(err)
{
    if(err) throw err;
    console.log('File created and saved');
});
// if we run it more than once it will add up the same thing in file 


//fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing
fs.open('hello.txt','w',function(err,file){
    if(err) throw err;
    console.log("Written succesfully");
});

// fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content
fs.writeFile('hello.txt','hey this is writing a file throw writeFile function',function(err){
if(err) throw err;
console.log("File written successfully");
});      // this will over-write the already written file 

//  UPDATING FILES 

// appendFile() to append the specified content to the end of the file 

fs.appendFile('hello.txt',' this is appending in last',function(err){
    if(err) throw err;
    console.log("Appended successfully");
});

//   DELETING FILE

//  fs.unlink() method deletes the specified file
// fs.unlink('deleting.txt',function(err){
//     if(err) throw err;
//     console.log("deleted successfully");
// });
// this will delete deleting.txt file


//fs.rename() file will rename the file
fs.rename('renaming.txt','renamingDone.txt',function(err){
    if(err) throw err;
    console.log("File Renamed Succesfulyy");
});

