const express = require("express");
const fs = require('fs');
const path = require("path");
   
const app = express();

const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (req, res) {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'
  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'err404.html'), (error, data) => {
        if (error) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
  })
});

app.post("/register ", urlencodedParser, function (req, res){
    {
        if(!req.body) return res.sendStatus(400);
        console.log(req.body);
        var path = req.body.path
        var file = req.body.file
        const filePath = __dirname + '\\post-req\\' + path + '\\' + file
        fs.exists(filePath, function (exists) {
            if (exists) {
                // Content-type is very interesting part that guarantee that
                // Web browser will handle responce in an appropriate manner.
                res.writeHead(200, {
                    "Content-Type": "application/octet-stream",
                    "Content-Disposition": "attachment; filename=" + file
                });
                fs.createReadStream(filePath).pipe(res);
                return;
            }
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("ERROR File does not exist");
        });
        res.end(filePath);
    }
});
   
app.listen(3000, ()=>console.log("Сервер запущен..."));