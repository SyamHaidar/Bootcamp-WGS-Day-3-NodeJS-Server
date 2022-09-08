const http = require("http");
const fs = require("fs");

// function route
const Route = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

// server
http
  .createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { "Content-Type": "text/html" });

    // url route
    if (url === "/about") {
      Route("./about.html", res);
    } else if (url === "/contact") {
      Route("./contact.html", res);
    } else {
      Route("./index.html", res);
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
