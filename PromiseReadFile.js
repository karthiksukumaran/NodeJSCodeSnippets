const fs = require('fs')

function readfile(fileName)  {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8' ,(error, fileContent) => {
      if (error) {
        reject(error);  
        return;
      }
      resolve(fileContent);
    })
  })
}


readfile('testfiles/somefile.txt')
.then(data => console.log(data))
.catch(err => console.error(err))
