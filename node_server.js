var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(create_Server).listen(1234);

function create_Server(request,response){
   //response.writeHead(200, {'Content-Type': 'text/plain'});//replace plain with html if we want to use html content
   //response.write("data from the server on the browser");//if we want to display from this file


  //  fs.readFile('../Html/index.html',function(error,data){
  //    if(error){
  //      response.writeHead(404);
  //      response.write("file not found......");
  //    }else{
  //      response.write(data);
  //    }
  //    response.end();
  //  });
//console.log("request ---->", request);
  var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");

response.writeHead(200);

   if(pathname == "/") {
        var html = fs.readFile("Html/index.html", "utf8");
        response.write(html);
    } else if (pathname == "/javaScript/session1.js") {
      console.log("request ---->");
        var script = fs.readFile("javaScript/session1.js", "utf8");
        response.write(script);
    }
    else if (pathname == "/CSS/session1.css") {
      console.log("request ---->");
        var css = fs.readFile("CSS/session1.css", "utf8");
        response.write(css);
    }

     response.end();
}
console.log("server started............");
