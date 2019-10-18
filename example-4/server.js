import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request!!!", req.url);
  res.write("Hello HTTP");
  res.end();
});

server.listen(3000);
