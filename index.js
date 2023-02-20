const path = require("path")
const http = require("http")
const fs = require("fs")
const pg = require("pg")
const app  = require("express")

const config = {
  host: 'localhost',
  user: 'admin',     
  password: 'admin',
  database: 'nodejs',
  port: 5432,
};

console.log("Ready to work")

var server = http.createServer((req, res) => {
  app.post("/register ", urlencodedParser, function (req, res){
    if(!req.body) return res.sendStatus(400);
        console.log(req.body);
        var name = req.body.path
        var nick = req.body.file
        UserPath = __dirname+"\\public\\user\\"+nick
        fs.exists(UserPath, function (exists) {
            if (exists) {
                // Content-type is very interesting part that guarantee that
                // Web browser will handle responce in an appropriate manner.
                res.writeHead(200, {
                    "Content-Type": "application/octet-stream",
                    "Content-Disposition": "attachment; filename=" + file
                });
                fs.createReadStream(UserPath).pipe(res);
                return;
            }
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("ERROR File does not exist");
        });
        res.end(UserPath);
  })
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
})


server.listen(1945, (err, res) => {
    if (err){console.log(err  )}
    console.log("Server listening on port 1945")
})
