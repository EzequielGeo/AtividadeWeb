const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  
    const file = req.url === '/' ? 'codigo.html' : req.url
    const filePath = path.join(__dirname,'/', file)
    const extname = path.extname(filePath)

    const allowedFiletypes = ['.html','.css','.js']
    const allowed = allowedFiletypes.find(item => item == extname)

    if(!allowed) return
    fs.readFile(
        filePath,
        (err, content) =>{
            if(err) throw err

            res.end(content)
        }    
    )
}).listen(3000, () => console.log('Servidor tá bala!'))