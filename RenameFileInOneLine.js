const fs = require('fs');

try {
  
    fs.renameSync('testfiles/somefile.txt', 'testfiles/newNameTofile.txt');

} catch (err) {
  console.error(err);
}
