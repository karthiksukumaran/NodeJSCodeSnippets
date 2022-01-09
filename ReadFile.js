const fs = require('fs')

try {
  const data = fs.readFileSync('testfiles/somefile.txt', 'utf8');
  console.log("----------- Printing content of the file -----------")
  console.log(data)
  console.log("----------------------------------------------------")
} catch (err) {
  console.error(err)
}
