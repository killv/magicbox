const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 1233

// GO!
const server = http.createServer((request, response) => {
  let parsedURL = url.parse(request.url, true)
  let path = parsedURL.pathname.replace(/^\/+|\/+$/g, '')
  let method = request.method.toUpperCase()
  let query = JSON.stringify(parsedURL.query)
  

  // console.log(`headers: ${headers}`)
  
  if (method === 'GET') {
    console.log(`o! there is a ${method} method, hm.. what's inside?`)
    if (path) {
      console.log(`you really want to know about ${path} and you wish ${query}?`)
      switch (path) {
        case 'css/index.css':
          fs.readFile('./web/css/index.css', {encoding: 'utf-8'}, (err, data) => {
            if (!err) {
              response.writeHead(200, {'Content-Type': 'text/css'})
              response.write(data);
              response.end();
            } else {
              console.log('ReadFile error:', err)
            }
          })
          return
          case 'js/index.js':
            fs.readFile('./web/js/index.js', {encoding: 'utf-8'}, (err, data) => {
              if (!err) {
                response.writeHead(200, {'Content-Type': 'text/js'})
                response.write(data);
                response.end();
              } else {
                console.log('ReadFile error:', err)
              }
            })
            return
          case 'favicon.ico':
            fs.readFile('favicon.ico', {}, (err, data) => {
              if (!err) {
                response.write(data);
                response.end();
              } else {
                console.log('ReadFile error:', err)
              }
            })
            return
      }
    } else {
      console.log(`do not disturb me mortal with ${method} method`)

      fs.readFile('./web/index.html', {encoding: 'utf-8'}, (err, data) => {
        if (!err) {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data);
            response.end();
        }
      })
    }
  }
})

server.listen(port, () => {
  console.log(`Magicbox runs on http://localhost:${port}`)
})