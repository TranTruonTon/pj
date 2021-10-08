const http = require("http");
const hostname = "localhost";
const port = process.env.PORT || 3000;
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    switch (req.url){
        case "/home":
            res.writeHead(200);
            var data = fs.readFileSync("./view/home.html")
            res.end(data.toString());
            break;
        case "/about":
            res.writeHead(200);
            var data = fs.readFileSync("./view/about.html")
            res.end(data.toString());
            break;
        case "/login":
            res.writeHead(200);
            var data = fs.readFileSync("./view/login.html")
            res.end(data.toString());
            break;
        case "/logout":
            res.writeHead(200);
            var data = fs.readFileSync("./view/loguot.html")
            res.end(data.toString());
            break;
        case "/signin":
            res.writeHead(200);
            var data = fs.readFileSync("./view/signin.html")
            res.end(data.toString());
            break;
        case "/contact":
            res.writeHead(200);
            var data = fs.readFileSync("./view/contact.html")
            res.end(data.toString());
            break;
        case "/order":
            res.writeHead(200);
            var data = fs.readFileSync("./view/order.html")
            res.end(data.toString());
            break;
        default:
            break;

    }
});

server.listen(port, () => {
    console.log("Listen !!!", hostname, port);
    });