var exec = require('child_process').execfunction start (res) {  console.log('requestHandlers start was called!')  exec("ls -lah", function(error, stdout, stderr) {    res.writeHead(200, {"Content-Type": "text/plain"})    res.write(stdout)    res.end()  })}function getData (res) {  console.log('requesstHandlers getData wad called!')  res.writeHead(200, {"Content-Type": "text/plain"})  res.write('hello getData')  // res.toJSON({'name': 'guojincai'})  res.end(JSON.stringify({'name': 'guojincai', 'age': 99, 'hobby': 'movie'}))}exports.start = startexports.getData = getData