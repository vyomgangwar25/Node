const http=require("http");
const data=require('./data')
http.createServer((req,resp)=>{
   resp.writeHead(200,{'content-Type':'application\Json'});
   resp.write(JSON.stringify(data))
 resp.end();
}).listen(6001);