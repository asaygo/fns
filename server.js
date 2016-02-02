var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var dataHashesObj = {
    sha1:"025b39d81c6b0ab0aebbd9d8bf3d5af0f15b4983", 
    submissionid:"ae2b7ebb-43c6-e511-80cc-ecf4bbc8e3d5", 
    itemname:"invoice.doc", 
    itemext:"doc", 
    firstseen:"30/01/2016 19:36", 
    detections:"PWS:Win32/Fareit"};

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