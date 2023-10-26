var http = require("http");

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (req.url === "/contact" && req.method === "GET") {
    }
  });
}

server.listen(5000, () => {
  console.log(`Server listening on port 5k`);
});
