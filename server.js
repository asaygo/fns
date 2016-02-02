var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var dataHashesObj = {
    sha1:"a1235659i79i7956i97056y65", 
    submissionid:"b1-b1b-b1-b11", 
    itemname:"invoice.doc", 
    itemext:"doc", 
    firstseen:"today", 
    detections:"Win32/Malware"};

http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //since we are in a request handler function
  //we're using readFile instead of readFileSync
  fs.readFile('index.html', 'utf-8', function(err, content) {
    if (err) {
      res.end('error occurred');
      return;
    }
    var dataHashes = JSON.stringify(dataHashesObj);  //here you assign temp variable with needed value

    var renderedHtml = ejs.render(content, {dataHashes: dataHashes});  //get redered HTML code
    res.end(renderedHtml);
  });
}).listen(80);
